import "./NavBar.css"

type Props = {
    connectWalletHandler: any;
    buttonText: string;
}

function NavBar({connectWalletHandler, buttonText}: Props) {
    return (
      <div className="NavBar">
          <div className="CustomButton" onClick={connectWalletHandler}> {buttonText}</div>
      </div>
    );
  }
  
  export default NavBar;
  