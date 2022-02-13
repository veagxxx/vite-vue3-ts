import { ref } from "vue";

interface LoginUser {
  email: string,
  password: string
}
export const loginUser = ref<LoginUser>({
  email: "admin@qq.com",
  password: "123456"
})
interface LoginRule {
  email: ({
      required: boolean;
      message: string;
      trigger: string[];
  } | {
      type: string;
      message: string;
      trigger: string[];
  })[];
  password: ({
      required: boolean;
      validator: (rule: any, value: string) => void;
      trigger: string[];
  })[];
}
const checkPassword = (rule: any, value: string) => {
  if (!value) {
    return new Error('Password can not be empty')
  } 
  if (value.length < 6 || value.length > 12) {
    return new Error('Please enter a valid 6-12 digit password')
  }
  return true
}
export const loginRules: LoginRule = {
  email: [
    {
      required: true,
      message: 'Email can not be empty',
      trigger: ['blur']
    },
    {
      type: 'email',
      message: 'Email is not valid',
      trigger: ['blur']
    }
  ],
  password: [
    {
      required: true,
      validator: checkPassword,
      trigger: ['blur']
    }
  ]
}

