import { Storage } from "redux-persist";
export interface ReduxPersistSensitiveStorage extends Storage {
  /**
   * Fetches key and passes the result to callback, along with an Error if there is any.
   */
  getItem(
    key: string,
    callback?: (error?: Error, result?: string) => void
  ): Promise<string | null>;

  /**
   * Sets value for key and calls callback on completion, along with an Error if there is any
   */
  setItem(
    key: string,
    value: string,
    callback?: (error?: Error) => void
  ): Promise<void>;

  getAllKeys(
    callback?: (error?: Error, result?: [string]) => void
  ): Promise<[string] | null>;
}
