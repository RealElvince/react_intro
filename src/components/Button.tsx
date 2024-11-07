
interface ButtonProps{
    children:string;
    color:string;
    onClickButton:() =>void;
}
const Button = ({children,color,onClickButton}:ButtonProps) => {
  return (
    
        <div>
            <button 
             type="button"
             className={'btn btn-lg btn-'+ color }
             onClick={onClickButton}
              >{children}
            </button>
        </div>

  )
}

export default Button;