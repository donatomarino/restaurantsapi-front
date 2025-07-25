import { GridRenderCellParams } from "@mui/x-data-grid";
import { CSSProperties } from "react";

export interface LoginPayload {
  email: string;
  password: string;
}

type MessageResponse = string | { [field: string]: string[] };

export interface BaseApiResponse {
  success: boolean;
  message: MessageObject;
  data?: Array<Restaurant>
  error?: boolean;
}

export interface AuthResponse extends BaseApiResponse {
  access_token: string,
  token_type: string;
}

export interface RequestParams {
  url: string;
  data?: object;
  params?: Record<string, string | number | boolean>;
}

export interface BaseRestaurant {
  id?: number;
  name: string;
  address: string;
  phone: string;
}

export interface Restaurant extends BaseRestaurant {
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface EditButtonsProps {
  params: RestaurantCellParams;
}

export interface RestFormProps {
  closeModal: () => void;
  dataRestaurant?: BaseRestaurant;
  setDataRestaurant?: Dispatch<SetStateAction<BaseRestaurant>>;
  openModal?: () => void;
}

export interface ModalState extends RestFormProps {
  modalIsOpen: boolean;
}

export type RestaurantCellParams = GridRenderCellParams<Restaurant>;

export type UseLoadReturn = {
  loading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

export type FullPageLoaderProps = {
  loading: boolean;
};

export type ReloadContextType = {
  reload: boolean;
  triggerReload: () => void;
}

export type ReloadProviderProps = {
  children: ReactNode;
}
