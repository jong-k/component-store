import Button from "../Button";
import "./index.scss";

type User = {
  name: string;
};

interface HeaderProps {
  /**
   * 유저 로그인 여부
   */
  user?: User;
  /**
   * 로그인 함수
   */
  onLogin: () => void;
  /**
   * 로그아웃 함수
   */
  onLogout: () => void;
  /**
   * 회원가입 함수
   */
  onCreateAccount: () => void;
}

/**
 * 글로벌 헤더
 */
export default function Header({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) {
  return (
    <header>
      <div className="font-nunito-sans border-b border-gray-300 py-4 px-5 flex items-center justify-between">
        <div>
          <svg
            className="inline-block align-top"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                fill="#FFF"
              />
              <path
                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                fill="#555AB9"
              />
              <path
                d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                fill="#91BAF8"
              />
            </g>
          </svg>
          <h1 className="font-bold text-lg leading-5 mt-1 ml-2 inline-block align-top">
            Acme
          </h1>
        </div>
        <div className="buttonBox">
          {user ? (
            <>
              <span className="text-gray-700 text-sm mr-4">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button
                primary
                size="small"
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
