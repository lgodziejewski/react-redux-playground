const pageLengthKey = 'pageLength';

export const localStorageWrapper = {
  loadPageLength: () => {
    try {
      const pageLength = localStorage.getItem(pageLengthKey);

      if (pageLength === null) {
        return undefined;
      }

      return Number(pageLength);
    } catch (err) {
      return undefined;
    }
  },
  savePageLength: (value) => {
    try {
      localStorage.setItem(pageLengthKey, value);
    } catch (err) {
      console.error('Local storage not available');
    }
  },
};
