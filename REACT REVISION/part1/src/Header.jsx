//HERE HEADER.JSX IT CAN ALSO BE NAMED AS .JS IT IS A COMPONENT AND IT SHOULD BE UNDER THE SRC FOLDER.
//THE FRIST LETTER OF THE COMPONENT SHOLD BE IN CAPITAL LETTER.

//FUNCTION BASED COMPONENT---

//SIMPLE FUNCTION---
 function Header(){
 return (
    <div>
    <h1>This is Your Header Second</h1>
    <nav>
    <ul>
        
        <li>Career</li>
        
    </ul>
    </nav>
    </div>
 )
}

//MULTIPLE FUNCTIONS CANNONT BE DEFINE IN ONE COMPONENT BY THE DEFAULT KEYWORD

//FOR DEFINEING OF MULTIPLE FUNCTIONS WE HAVE TO USE {}

//ARROW FUNCTION---

const HeaderElement = () => {
    return(

        <div>
            <h1>This is Your Header First</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </nav>
        </div>
        
    )
}

//export default HeaderElement;

export {Header,HeaderElement};


