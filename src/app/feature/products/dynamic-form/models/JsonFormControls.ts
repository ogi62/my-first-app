
  export interface JsonFormData {
    controls: JsonFormControls[]
  }
  export enum formElementType {
    input = 'input',
    radio = 'radio' ,
    select= 'select',
    textarea = 'textarea',
  }
  export interface JsonFormControls {
    name: string
  label: string
  value?: string
  type: string
  validators: JsonFormValidators
  model?: string
  options?: Option[]
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

  export interface Option {
    optionName: string
    value: string
  }

  /////////

  
  