import './HeaderButton.css'

function HeaderButton({ text, link }) {
    return <a className='header-button' href={link}> {text} </a>
    // return <div>This is a button</div>
}

export default HeaderButton;
