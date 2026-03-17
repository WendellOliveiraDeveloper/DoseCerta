import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserModel } from "@/models/UserModel";
import { UserCreateDTO, UserLoginDTO, UserResponseDTO } from "@/dto/user.dto";

const STORAGE_KEY_USER = "@app:user";
const STORAGE_KEY_TOKEN = "@app:token";

const save = async (token: string, data: UserLoginDTO): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY_TOKEN, token);
    await AsyncStorage.setItem(STORAGE_KEY_USER, JSON.stringify(data));
  } catch (err) {
    console.log("error: ", err);
    throw err;
  }
};

const getUser = async (): Promise<UserResponseDTO | null> => {
  try {
    const user = await AsyncStorage.getItem(STORAGE_KEY_USER);

    if (!user) return null;

    return JSON.parse(user) as UserResponseDTO;
  } catch (err) {
    console.log(`Erro ao pegar os dados: ${err}`);
    return null;
  }
};

const logout = () => {
  AsyncStorage.multiRemove([STORAGE_KEY_TOKEN, STORAGE_KEY_USER]);
};

export const userStorage = {
  save,
  getUser,
  logout,
};
