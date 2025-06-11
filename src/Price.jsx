export default function Price({oldPrice, newPrice}) {
let oldstyles = {  
 textDecorationLine:"Line-through",
};
let newStyles = {
    fontWeight:"bold",
};

let styles = {
backgroundColor: "#282c34",
height: "30px",
borderBottomLeftRadius: "14px",
borderBottomRightRadius: "14px",
}

    return(
        <div style={styles}>
            <span style={oldstyles}>{oldPrice}</span>
            &nbsp;  &nbsp;  &nbsp;
            <span styles={newStyles}>{newPrice}</span>
        </div>
    );
}