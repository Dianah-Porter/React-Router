import {Link } from 'react-router-dom'
function Navbar(){
    return (
            <nav className='flex gap-8 justify-center bg-blue-900 text-white '>
                <Link className='hover:bg-blue-600' to='/' end>Home</Link>
                <Link className='hover:bg-blue-600' to='/about'>About</Link>
                <Link className='hover:bg-blue-600' to='/contact'>Contact</Link>
            </nav>
    );
}
export default Navbar;
