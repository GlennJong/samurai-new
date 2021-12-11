import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import AutoScrollHelper from '../AutoScrollHelper';
import LinksList from './LinksList';
import SocialList from '../SocialList';
import { _w } from '../../utils/wordingSystem';
import { respondTo } from '../../utils/responsive';
import { lockWindow } from '../../utils/methods';
import { colors } from '../../constants/colors';
import walletStatus from '../../store/walletStatus';
import { connectWallet, getCurrentWalletConnected} from "../../utils/Interact.js";
import { isAndroid, isIOS } from "react-device-detect";

const Header = () => {
  const wording = _w('header');

  const headerRef = useRef(null);
  const fixederRef = useRef();

  const prevPageYOffset = useRef(0);
  const navbarTop = useRef(0);

  const [ open, setOpen ] = useState(false);

  const dispatch = useDispatch(walletStatus);
  const { connectId } = useSelector(state => state.walletStatus);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);    
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [])

  function handleWindowScroll(e) {
    const pageYOffset = Math.max(window.pageYOffset, 0);
    const delta = pageYOffset - prevPageYOffset.current;
    navbarTop.current = navbarTop.current - delta;
    navbarTop.current = Math.max(navbarTop.current, -160);

    if (delta < 0) navbarTop.current = 0;
    if (delta > 0) setOpen(false);
    fixederRef.current.style.setProperty('transition-duration', (delta < 0) ? '0.3s': '0s');
    fixederRef.current.style.setProperty('transform', `translateY(${navbarTop.current}px)`);

    prevPageYOffset.current = pageYOffset;
  }

  useEffect(() => {
    async function fetchWalletAPI() {
      const { address, status } = await getCurrentWalletConnected();

      if (address.length > 0){
        dispatch(walletStatus.actions.connectWallet());
        dispatch(walletStatus.actions.setConnectId('🦊 : ' + address.slice(0,6) + '...' + address.slice(-4)));
        dispatch(walletStatus.actions.setHint("👉🏽 Awesome let's buy some stuff. 50 pieces max once"));
      }
  
      addWalletListener();
    }
    fetchWalletAPI()
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          dispatch(walletStatus.actions.connectWallet());
          dispatch(walletStatus.actions.setConnectId('🦊 : ' + accounts[0].slice(0,6) + '...' + accounts[0].slice(-4)));
          dispatch(walletStatus.actions.setHint("👉🏽 Awesome let's buy some stuff. 50 pieces max once"));
        } else {
          dispatch(walletStatus.actions.disconnectWallet());
          dispatch(walletStatus.actions.setConnectId(""));
          dispatch(walletStatus.actions.setHint("🦊 Please Connect to Metamask with the right button first."));
        }
      });
    } else {
      dispatch(walletStatus.actions.disconnectWallet());
      dispatch(walletStatus.actions.setConnectId(""));
      dispatch(walletStatus.actions.setHint(<span>
        <p>
          {" 🦊 You must install "} 
          <a target="_blank" href={`https://metamask.io/download.html`} rel="noopener noreferrer" style={{textDecoration: 'underline'}}>
            Metamask
          </a>
          {"."}
          <br />
          {"A virtual Ethereum wallet in your browser."}
        </p>
      </span>));
    }
  }

  const handleClickWalletButton = async() => {

    if (isAndroid || isIOS){
      if (!window.ethereum || !window.ethereum.isMetaMask) {
        window.location = "https://metamask.app.link/dapp/www.samuraipunks.com";
      } else {
        const walletResponse = await connectWallet();
        if (walletResponse.address.length > 0){
          dispatch(walletStatus.actions.connectWallet());
          dispatch(walletStatus.actions.setConnectId('🦊 : ' + walletResponse.address.slice(0,6) + '...' + walletResponse.address.slice(-4)));
          dispatch(walletStatus.actions.setHint("👉🏽 Awesome let's buy some stuff. 50 pieces max once"));
        }
      }
    } else {
      const walletResponse = await connectWallet();
      if (walletResponse.address.length > 0){
        dispatch(walletStatus.actions.connectWallet());
        dispatch(walletStatus.actions.setConnectId('🦊 : ' + walletResponse.address.slice(0,6) + '...' + walletResponse.address.slice(-4)));
        dispatch(walletStatus.actions.setHint("👉🏽 Awesome let's buy some stuff. 50 pieces max once"));
      }
    }
  }

  const handleCloseLinksMenu = () => {
    setOpen(false);
  }

  const handleToggleLinksMenu = () => {
    setOpen(!open);
  }

  useEffect(() => {
    lockWindow(open);
  }, [open])


  return (
    <Root ref={headerRef}>
      <AutoScrollHelper />
      <Fixeder ref={fixederRef}>
        <Wrapper>
          <MenuButton open={open} onClick={handleToggleLinksMenu}>
            <div></div>
            <div></div>
            <div></div>
          </MenuButton>
          <Link className="logo" to="/?to=heading">
            <img src="/images/header-logo.png" alt=""/>
            <img className="mobile" src="/images/header-logo-mobile.png" alt=""/>
          </Link>
          <MenuWrapper className="menu" open={open}>
            <LinksList data={wording.links} onLinkClick={handleCloseLinksMenu} />
            <SideList>
              <Others>
                {/* <ConnectButton onClick={handleClickWalletButton}>
                  { connectId || 'CONNECT WALLET' }
                </ConnectButton> */}
              </Others>
              <SocialList data={wording.socials} />
            </SideList>
          </MenuWrapper>
          <SocialList mobile data={wording.socials} />
        </Wrapper>
      </Fixeder>
    </Root>
  )
}

const Root = styled.header`
`

const Fixeder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  box-sizing: border-box;
  background: ${colors.black};
  color: ${colors.white};
  transition: transform .3s ease;
  box-shadow: 0px 4px 12px hsla(0, 0%, 0%, .5);
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  transition: all .3s ease ${({time}) => time}ms;
  ${respondTo.lg} {
    padding: 0;
  }
  .logo {
    position: relative;
    display: block;
    width: 280px;
    z-index: 3;
    img {
      width: 100%;
      height: auto;
      ${respondTo.lg} {
        display: none;
      }
    }
    img.mobile {
      display: none;
      ${respondTo.lg} {
        display: block;
      }
    }
    ${respondTo.lg} {
      margin-top: 4px;
      margin-left: 36px;
      width: 94px;
    }
  }
  .menu {
    width: 70vw;
    ${respondTo.lg} {
      width: 100vw;
    }
  }
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${ respondTo.lg } {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    padding: 24px 40px;
    padding-top: 110px;
    width: 75vw;
    height: 100vh;
    overflow-y: auto;
    background: ${colors.black};
    z-index: 2;
    transform: translateX(100%);
    transition: all .3s ease;
    box-sizing: border-box;
    ${({open}) => open && css`transform: translateX(0%);`}
  }
`

const MenuButton = styled.button`
  display: none;
  border: 0;
  width: 72px;
  height: 48px;
  background: transparent;
  z-index: 4;
  > div {
    border-radius: 12px;
    margin: auto;
    width: 23px;
    height: 3px;
    background: #666666;
    transition: all .3s ease;
    & + div {
      margin-top: 5px;
    }
    ${({open}) => open && css`
      &:first-child { transform: translateY(8px) rotate(45deg);}
      &:nth-child(2) { opacity: 0; }
      &:last-child { transform: translateY(-8px) rotate(-45deg);}
    `}
  }
  ${ respondTo.lg } {
    display: block;
  }
`

const SideList = styled.div`
  display: flex;
`

const Others = styled.div`
  display: flex;
  ${respondTo.lg} {
    display: none;
    ${'' /* display: block; */}
    margin-top: 80px;
    text-align: center;
  }
`

const ConnectButton = styled.button`
  border: 1px solid ${colors.white};
  border-radius: 5px;
  margin-right: 24px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  background: transparent;
  color: ${colors.white};
  white-space: nowrap;
  ${respondTo.lg} {
    margin: 0;
    margin-bottom: 32px;
    padding: 12px 32px;
    font-size: 20px;
  }
`

export default Header;
