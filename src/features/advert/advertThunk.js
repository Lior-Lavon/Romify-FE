import customFetch from "../../utils/customFetch";

export const getAdvertThunk = async (userId, url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, { params: { user_id: userId } });
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const createAdvertThunk = async (url, address, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, address);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};
export const updateAdvertParamsThunk = async (url, param, thunkAPI) => {
  try {
    const resp = await customFetch.put(url, param);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const listAllAdvertsThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const updateAdvertInternalThunk = async (url, body, thunkAPI) => {
  try {
    const resp = await customFetch.put(url, body);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const deleteAdvertThunk = async (url, advertId, thunkAPI) => {
  try {
    const resp = await customFetch.delete(url, { data: advertId });
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const postImageAdvertThunk = async (url, body, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, body);
    return { advert: resp.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const updateImageTitleThunk = async (url, body, thunkAPI) => {
  try {
    const resp = await customFetch.put(url, body);
    return { advert: resp.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const deleteImageAdvertThunk = async (url, body, thunkAPI) => {
  try {
    const resp = await customFetch.delete(url, { data: body });
    return { advert: resp.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};

export const updateFavoriteAdvertThunk = async (url, body, thunkAPI) => {
  try {
    const resp = await customFetch.put(url, body);
    return { favorite: resp.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.msg);
  }
};
