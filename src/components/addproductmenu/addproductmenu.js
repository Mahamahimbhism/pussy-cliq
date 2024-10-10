import { useContext, useState } from "react";
import Modal from "../ui/Modal/Modal";
import "./addproductmenu.css";
import AppContext from "../../store/app-context";

function Addproductmenu(){
    const {showMenu, closeMenu, addProductFunc} = useContext(AppContext);
    // const nameRef=useRef();
    const [inputName, setInputName] = useState("");
    const [inputLink, setInputLink] = useState("");
    return(<div>
        {showMenu && <Modal show={showMenu} onClose={closeMenu}>
            <div className="menu-container">
                <div className="menu-heading">Add Your Product
                    <form onSubmit={(event) => {event.preventDefault(); addProductFunc(inputName, inputLink);}} className="add-product-form">
                        <div className="form-label">Enter Product Name</div>
                        {/* <input className="form-input" name="Product Name" ref={nameRef}/> */}
                        <input className="form-input" name="Product Name" value={inputName} onChange={(event)=>{setInputName(event.target.value);}}/>
                        <div className="form-label">Enter Product Image Link</div>
                        <input className="form-input" name="Product Image Link" value={inputLink} onChange={(event)=>{setInputLink(event.target.value)}}/>
                        <button type="submit" className="submit-button">Add</button>
                    </form>
                </div>
            </div>
        </Modal>}
    </div>);
}

export default Addproductmenu;
