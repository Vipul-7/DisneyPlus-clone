import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userSliceActions } from "../store/user/userSlice";
import { useEffect } from "react";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector((state) => state.user.name);
  const userPhoto = useSelector((state) => state.user.photo);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  const handlerAuth = async () => {
    if (!userName)
      try {
        const signIn = await auth.signInWithPopup(provider);
        setUser(signIn.user);
      } catch (error) {
        alert(error.message);
      }
    else {
      try {
        await auth.signOut();
        dispatch(userSliceActions.setSignOutState());
        navigate("/");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const setUser = (user) => {
    dispatch(
      userSliceActions.setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        {/* <img src="/images/disney-hotstar-logo-dark.svg" alt="Disney+" /> */}
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {!userName ? (
        <Login onClick={handlerAuth}>login</Login>
      ) : (
        <>
          <NavMenu>
            <NavLink href="/home">
              <img src="/images/home-icon.svg" alt="home-icon" />
              <span>HOME</span>
            </NavLink>
            <NavLink href="/home">
              <img src="/images/search-icon.svg" alt="search" />
              <span>SEARCH</span>
            </NavLink>
            <NavLink href="/home">
              <img src="/images/watchlist-icon.svg" alt="watchlist icon" />
              <span>WATCHLIST</span>
            </NavLink>
            <NavLink href="/home">
              <img src="/images/original-icon.svg" alt="original icon" />
              <span>ORIGINALS</span>
            </NavLink>
            <NavLink href="/home">
              <img src="/images/movie-icon.svg" alt="movie-icon" />
              <span>MOVIES</span>
            </NavLink>
            <NavLink href="/home">
              <img src="/images/series-icon.svg" alt="home-icon" />
              <span>SERIES</span>
            </NavLink>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handlerAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default NavigationBar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  /* width: 140px; */
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      /* white-space: nowrap; */
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        /* transition: all 250ms ease-out 0s; */
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
  letter-spacing: 1.5px;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0, 0, 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${UserImg} {
    border-radius: 50%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
