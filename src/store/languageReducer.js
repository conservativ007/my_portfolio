const SWITCH_LANGUAGE = "SWITCH_LANGUAGE";

export function languageReducer(store = "ru", action) {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return store = store === "en" ? "ru" : "en";

    default: return store;
  }
}

export const actionLanguage = () => ({ type: SWITCH_LANGUAGE });