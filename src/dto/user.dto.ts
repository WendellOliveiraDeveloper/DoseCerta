export interface UserResponseDTO {
  id: number;
  nome: string;
  email: string;
}

export interface UserCreateDTO {
  nome: string;
  email: string;
  senha: string;
}

export interface UserLoginDTO {
  nome: string;
  senha: string;
}

export interface UserUpdateDTO {
  id: number;
  nome: string;
  email: string;
}
