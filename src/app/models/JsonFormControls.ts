// interface JsonFormValidators {
//   min?: number;
//   max?: number;
//   required?: boolean;
//   requiredTrue?: boolean;
//   minLength?: boolean;
//   maxLength?: boolean;
// }
 
// export interface JsonFormControls {
//   name: string;
//   label: string;
//   value: string;
//   type: string;
//   required: boolean;
//   validators: JsonFormValidators;
// }

// export interface JsonFormData {
//     controls: JsonFormControls[];
//   }

  // export interface JsonFormData {
  //   controls: JsonFormControls[]
  // }
  
  // export interface JsonFormControls {
  //   name: string
  //   label: string
  //   value: string
  //   type: string
  //   validators: JsonFormValidators
  // }
  
  // export interface JsonFormValidators {
  //   required?: boolean
  //   minLength?: number
  //   maxLength?: number
  // }

  export interface JsonFormData {
    controls: JsonFormControls[]
  }
  
  export interface JsonFormControls {
    name: string
    label: string
    value?: string
    type: string
    validators?: JsonFormValidators
    model?: string
    values?: Values
    placeholder?: string
  }
  
  export interface JsonFormValidators {
    required: boolean
    minLength?: number
  }
  
  export interface Values {
    "39"?: string
    "40"?: string
    "41"?: string
    "42"?: string
    validators: JsonFormValidators2
    nike?: string
    adidas?: string
    puma?: string
    reebok?: string
  }
  
  export interface JsonFormValidators2 {
    required: boolean
  }

  /////////

  