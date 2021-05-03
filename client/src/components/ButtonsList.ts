
export type ButtonNames = "BTN_CLEAR" | "BTN_PLUS_MINUS" | "BTN_NUM0" | "BTN_NUM1" |
  "BTN_NUM2" | "BTN_NUM3" | "BTN_NUM4" | "BTN_NUM5" | "BTN_NUM6" | "BTN_NUM7" |
  "BTN_NUM8" | "BTN_NUM9" | "BTN_PERCENT" | "BTN_DIVISION" | "BTN_MULTIPLY" |
  "BTN_MINUS" | "BTN_PLUS" | "BTN_DECIMAL" | "BTN_EQUAL";

export interface ButtonInfo {
  title: string,
  position: ButtonNames
}

//every possible button in this calculator ,position is used to set placement in layout and activate button specific CSS
//for example BTN_NUM0 has different size from others , and there multiple colors of buttons
export const ButtonsList: Array<ButtonInfo>= [

   // Numbers
   { position: "BTN_NUM0", title: "0" },
   { position: "BTN_NUM1", title: "1" },
   { position: "BTN_NUM2", title: "2" },
   { position: "BTN_NUM3", title: "3" },
   { position: "BTN_NUM4", title: "4" },
   { position: "BTN_NUM5", title: "5" },
   { position: "BTN_NUM6", title: "6" },
   { position: "BTN_NUM7", title: "7" },
   { position: "BTN_NUM8", title: "8" },
   { position: "BTN_NUM9", title: "9" },
 
 
   // Operators
   
   { position: "BTN_DIVISION", title: "/" },
   { position: "BTN_MULTIPLY", title: "*" },
   { position: "BTN_MINUS", title: "-" },
   { position: "BTN_PLUS", title: "+" },
 
   //Special Buttons
   { position: "BTN_PERCENT", title: "%" },
   { position: "BTN_CLEAR", title: "C" },
   { position: "BTN_PLUS_MINUS", title: "+/-" },
   { position: "BTN_DECIMAL", title: "." },
   { position: "BTN_EQUAL", title: "=" }
];




