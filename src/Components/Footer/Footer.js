import "./Footer.css";

const Footer = () => {
    return(
        
        <div className="footer-container">
            <a href="#">Applications are open for YC Summer 2022</a>
              <div className="footer-links">
                <a href="#">Guidelines</a> |
                <a href="#">FAQ</a> |
                <a href="#">Lists</a> |
                <a href="#">API</a> |
                <a href="#">Security</a> |
                <a href="#">Legal</a> |
                <a href="#">Apply to YC</a> |
                <a href="#">Contact</a> 
                </div>
                <div className="search-bar">
                    Search:
                   <input type="text"  />
                </div> 
                


            
        </div>
    )
}

export default Footer;