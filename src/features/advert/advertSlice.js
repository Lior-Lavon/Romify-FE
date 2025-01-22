import Swal from "sweetalert2";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAdvertThunk,
  createAdvertThunk,
  updateAdvertParamsThunk,
  listAllAdvertsThunk,
  updateAdvertInternalThunk,
  deleteAdvertThunk,
  postImageAdvertThunk,
  updateImageTitleThunk,
  deleteImageAdvertThunk,
  updateFavoriteAdvertThunk,
} from "./advertThunk";
import { formatDate } from "../../utils/formatDate";
import { updateAdvertParamsBody } from "./updateAdvertParamsBody";
import { toast } from "react-toastify";

const initialAdvertState = {
  id: null,
  user_id: null,
  type: "room",
  street: "Groenhoven",
  house_number: "806",
  entrance: "",
  zipcode: "1103 LZ",
  city: "amsterdam",
  country_id: 121, // default 1 - not_set
  coordinate: "",
  rental_period: "temporary",
  availability_from: Date.now(),
  availability_to: Date.now(),
  title: "",
  description: "",
  graphics: [],
  rental_surface_sq: 0,
  apartment_surface_sq: 0,
  furnished: "unfurnished",
  furniture: [],
  attributes: [],
  is_private_toilet: false,
  is_private_shower: false,
  is_private_sink: false,
  is_private_balcony: false,
  private_balcony_size: 0,
  monthly_rent: 0,
  deposit: 0,
  additional_costs: 0,
  additional_cost_description: "",
  utilities: "exclude",
  internet: "include",
  energy_label: "",
  property_max_tenant: 3, // 0
  current_tenant_genders: "mixed",
  current_tenant_languages: [],
  num_of_tenants: 3, // 1
  preferred_gender: "male", // not_set",
  preferred_min_age: 18,
  preferred_max_age: 99,
  preferred_rent_period: "3_month", // not_set",
  preferred_tenant_languages: [],
  preferred_tenant_status: [], // student, working_student, working, looking_for_a_job
  allow_pets: "not_set",
  status: "draft",
  view: 0,
  liked: 0,
  favorite: 0,
  isFavorite: false,
  share: 0,
  updated_at: "",
  created_at: "",
};

const initialFilters = {
  address: "",
  distance: 10,
  property_type: "room",
  monthly_rent: 0,
  apartment_surface_sq: 0,
};

const initialShareView = {
  isShareView: false,
  advertId: "",
};

const initialState = {
  isLoading: false,
  advert: initialAdvertState,
  filters: initialFilters,
  share: initialShareView,
  adverts: [],
};

export const getAdvert = createAsyncThunk(
  "advert/getAdvert",
  async ({ userId, advertId }, thunkAPI) => {
    return getAdvertThunk(userId, `/properties/${advertId}`, thunkAPI);
  }
);

export const createAdvert = createAsyncThunk(
  "advert/createAdvert",
  async (address, thunkAPI) => {
    return createAdvertThunk("/properties", address, thunkAPI);
  }
);

export const updateAdvertParams = createAsyncThunk(
  "advert/updateAdvertParams",
  async (advert, thunkAPI) => {
    const reqBody = updateAdvertParamsBody(advert);
    // console.log(`updateAdvertParams Body: `, reqBody);
    return updateAdvertParamsThunk("/properties/params", reqBody, thunkAPI);
  }
);

// filter == [(all / room / apartment / house) | favorite];
export const listAllAdverts = createAsyncThunk(
  "advert/listAllAdverts",
  async (filter, thunkAPI) => {
    if (filter == undefined) {
      filter = "all";
    }

    const {
      filters: {
        address,
        distance,
        property_type,
        monthly_rent,
        apartment_surface_sq,
      },
    } = thunkAPI.getState().advert;
    const url = `/properties/status_type/${filter}?address=${address}&distance=${distance}&property_type=${property_type}&monthly_rent=${monthly_rent}&apartment_surface_sq=${apartment_surface_sq}`;

    // console.log(url);
    return listAllAdvertsThunk(url, thunkAPI);
  }
);

export const updateAdvertInternal = createAsyncThunk(
  "advert/updateAdvertInternal",
  async (body, thunkAPI) => {
    return updateAdvertInternalThunk("properties/internal", body, thunkAPI);
  }
);

export const deleteAdvert = createAsyncThunk(
  "advert/deleteAdvert",
  async (advertId, thunkAPI) => {
    return deleteAdvertThunk("properties", advertId, thunkAPI);
  }
);

export const postImageAdvert = createAsyncThunk(
  "advert/postImageAdvert",
  async (body, thunkAPI) => {
    return postImageAdvertThunk("/properties/graphics", body, thunkAPI);
  }
);

export const postImageAdvertThumb = createAsyncThunk(
  "advert/postImageAdvert",
  async (body, thunkAPI) => {
    return postImageAdvertThunk("/properties/graphics", body, thunkAPI);
  }
);

export const updateImageTitle = createAsyncThunk(
  "advert/updateImageTitle",
  async (body, thunkAPI) => {
    return updateImageTitleThunk("/properties/graphics/title", body, thunkAPI);
  }
);

export const deleteImageAdvert = createAsyncThunk(
  "advert/deleteImageAdvert",
  async (body, thunkAPI) => {
    return deleteImageAdvertThunk("/properties/graphics", body, thunkAPI);
  }
);

export const updateFavoriteAdvert = createAsyncThunk(
  "advert/updateFavoriteAdvert",
  async (body, thunkAPI) => {
    return updateFavoriteAdvertThunk("properties/favorite", body, thunkAPI);
  }
);

const advertSlice = createSlice({
  name: "advert",
  initialState,
  reducers: {
    clearAdvertStore: (state) => {
      state.advert = initialAdvertState;
    },
    updateAdvert: (state, { payload }) => {
      const { name, value } = payload;
      state.advert = { ...state.advert, [name]: value };
    },
    updateAdvertImageTitle: (state, { payload }) => {
      const { imageId, title } = payload;
      const graphics = [...state.advert.graphics];
      var result = graphics.map((el) =>
        el.id == imageId ? { ...el, title } : el
      );
      state.advert = { ...state.advert, graphics: result };
    },
    deleteAdvertImage: (state, { payload }) => {
      const { id } = payload;
      var result = state.advert.graphics.filter((el) => {
        if (el.id !== id) return el;
      });
      state.advert = { ...state.advert, graphics: result };
    },
    setFilters: (state, { payload }) => {
      state.filters = { ...payload };
    },
    clearFilters: (state) => {
      return { ...state, filters: initialFilters };
    },
    // setPage: (state, { payload: { page } }) => {
    //   state.page = page;
    // },
    toggleShareView: (state, { payload }) => {
      const { advertId } = payload;
      return {
        ...state,
        share: { isShareView: !state.share.isShareView, advertId },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // getAdvert
      .addCase(getAdvert.pending, (state) => {
        state.isLoading = true;
        // console.log("getAdvert - pending");
      })
      .addCase(getAdvert.fulfilled, (state, { payload }) => {
        // console.log("getAdvert - fulfilled");
        state.isLoading = false;
        state.advert = { ...payload };
      })
      .addCase(getAdvert.rejected, (state) => {
        // console.log("getAdvert - rejected");
        state.isLoading = false;
        toast.error("GetAdvert request error");
      })

      // createAdvert
      .addCase(createAdvert.pending, (state) => {
        state.isLoading = true;
        // console.log("validateAddress - pending");
      })
      .addCase(createAdvert.fulfilled, (state, { payload }) => {
        // console.log("validateAddress - fulfilled");
        const nowInSec = new Date();
        state.isLoading = false;
        state.advert = {
          ...payload,
          // set initial values after create
          availability_from: formatDate(nowInSec),
          availability_to: formatDate(nowInSec),
          furnished: "unfurnished",
          utilities: "exclude",
          internet: "include",
        };
      })
      .addCase(createAdvert.rejected, (state) => {
        state.isLoading = false;
        // console.log("validateAddress - rejected");
        toast.error("CreateAdvert request error");
      })
      // updateAdvertParams
      .addCase(updateAdvertParams.pending, (state) => {
        state.isLoading = true;
        // console.log("updateAdvertParams - pending");
      })
      .addCase(updateAdvertParams.fulfilled, (state, { payload }) => {
        // console.log("updateAdvertParams - fulfilled");
        state.isLoading = false;
        state.advert = { ...payload };
      })
      .addCase(updateAdvertParams.rejected, (state) => {
        state.isLoading = false;
        // console.log("updateAdvertParams - rejected");
        toast.error("UpdateAdvertParams request error");
      })
      .addCase(listAllAdverts.pending, (state) => {
        state.isLoading = true;
        // console.log("listAllAdverts - pending");
      })
      .addCase(listAllAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // console.log("listAllAdverts - fulfilled");
        // console.log(payload);
        state.adverts = [...payload];
      })
      .addCase(listAllAdverts.rejected, (state, { payload }) => {
        state.isLoading = false;
        // console.log("listAllAdverts - rejected :", state);
        // toast.error(payload);
        // Swal.fire("Geocoding", payload, "error");
      })

      .addCase(updateAdvertInternal.pending, (state) => {
        state.isLoading = true;
        // console.log("updateAdvertInternal - pending");
      })
      .addCase(updateAdvertInternal.fulfilled, (state, { payload }) => {
        // console.log("updateAdvertInternal - fulfilled");
        state.isLoading = false;
      })
      .addCase(updateAdvertInternal.rejected, (state) => {
        state.isLoading = false;
        console.log("updateAdvertInternal - rejected");
        toast.error("updateAdvert request error");
      })

      .addCase(deleteAdvert.pending, (state) => {
        state.isLoading = true;
        console.log("deleteAdvert - pending");
      })
      .addCase(deleteAdvert.fulfilled, (state, { payload }) => {
        console.log("deleteAdvert - fulfilled");
        state.isLoading = false;
        // {id: 7, delete: 'true', deleted_at: '2024-01-22T16:41:06.714761Z'}
        state.adverts = [
          ...state.adverts.filter((adv) => {
            if (adv.id != payload.id) return adv;
          }),
        ];
      })
      .addCase(deleteAdvert.rejected, (state) => {
        state.isLoading = false;
        console.log("deleteAdvert - rejected");
        toast.error("listAllAdverts request error");
      })

      // postImageAdvert
      .addCase(postImageAdvert.pending, (state) => {
        state.isLoading = true;
        // console.log("postImageAdvert - pending");
      })
      .addCase(postImageAdvert.fulfilled, (state, { payload }) => {
        // console.log("postImageAdvert - fulfilled");
        state.isLoading = false;
        const { advert } = payload;
        state.advert = { ...advert };
      })
      .addCase(postImageAdvert.rejected, (state) => {
        state.isLoading = false;
        // console.log("postImageAdvert - rejected");
        toast.error("PostImageAdvert request error");
      })
      // updateImageTitle
      .addCase(updateImageTitle.pending, (state) => {
        state.isLoading = true;
        // console.log("updateImageTitle - pending");
      })
      .addCase(updateImageTitle.fulfilled, (state, { payload }) => {
        // console.log("updateImageTitle - fulfilled");
        state.isLoading = false;
        const { advert } = payload;
        state.advert = { ...advert };
      })
      .addCase(updateImageTitle.rejected, (state) => {
        state.isLoading = false;
        // console.log("updateImageTitle - rejected");
        toast.error("UpdateImageTitle request error");
      })
      //deleteImageAdvert
      .addCase(deleteImageAdvert.pending, (state) => {
        state.isLoading = true;
        // console.log("deleteImageAdvert - pending");
      })
      .addCase(deleteImageAdvert.fulfilled, (state, { payload }) => {
        // console.log("deleteImageAdvert - fulfilled ");
        const { advert } = payload;
        state.advert = { ...advert };
        state.isLoading = false;
      })
      .addCase(deleteImageAdvert.rejected, (state) => {
        state.isLoading = false;
        // console.log("deleteImageAdvert - rejected");
        toast.error("DeleteImageAdvert request error");
      })
      .addCase(updateFavoriteAdvert.pending, (state) => {
        // state.isLoading = true;
        console.log("updateFavoriteAdvert - pending");
      })
      .addCase(updateFavoriteAdvert.fulfilled, (state, { payload }) => {
        console.log("updateFavoriteAdvert - fulfilled ");
        const { favorite } = payload;
        // in adverts array , find the property_id and update the favorite flag
        state.adverts = [
          ...state.adverts.map((adv) => {
            if (adv.id == favorite.property_id) {
              adv.is_favorite = favorite.favorite;
            }
            return adv;
          }),
        ];
        if (state.advert == favorite.property_id) {
          state.advert = { ...advert, isFavorite: favorite.favorite };
        }
      })
      .addCase(updateFavoriteAdvert.rejected, (state) => {
        // state.isLoading = false;
        console.log("updateFavoriteAdvert - rejected");
      });
  },
});

export const {
  clearAdvertStore,
  updateAdvert,
  updateAdvertImageTitle,
  deleteAdvertImage,
  setFilters,
  clearFilters,
  toggleShareView,
  // setPage,
} = advertSlice.actions;
export default advertSlice.reducer;
