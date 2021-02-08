import axios from "axios";
import { setRegisterInfo } from "../slices/registerInfoSlice";
import { updateResponseData } from "../slices/responseDataSlice";
import { refreshUserList, showMoreUsers } from "../slices/usersSlice";

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1";

const getToken = async () => {
  const token = await axios.get("/token").then((response) => response.data.token);
  return token;
};

//

export const getPositions = async () => {
  try {
    const result = await axios.get("/positions").then((response) => response.data.positions);
    return result;
  } catch (error) {
    console.log(error.status);
  }
};

//

export const asyncGetUsers = (page) => async (dispatch) => {
  try {
    await axios.get(`/users?page=${page ? page : 1}&count=5`).then((response) => {
      if (page) {
        dispatch(showMoreUsers(response.data.users));
      } else {
        dispatch(refreshUserList(response.data.users));
      }
      dispatch(
        updateResponseData({
          curentPage: response.data.page,
          totalPages: response.data.total_pages,
          totalUsers: response.data.total_users,
        })
      );
    });
  } catch (error) {
    console.log(error);
  }
};

//

export const asyncRegister = (user) => async (dispatch) => {
  const formData = new FormData();

  formData.append("position_id", user.position_id);
  formData.append("name", user.name);
  formData.append("email", user.email);
  formData.append("phone", user.phone);
  formData.append("photo", user.photo);

  const options = {
    headers: {
      "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
      ["Token"]: await getToken(),
    },
  };

  await axios
    .post("/users", formData, options)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .then((response) => {
      dispatch(setRegisterInfo(response.data));
    })
    .catch((error) => dispatch(setRegisterInfo(error.response.data)));
};
