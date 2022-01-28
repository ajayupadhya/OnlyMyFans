import SecureLS from "secure-ls";

const ls = typeof window !== "undefined" && new SecureLS();

function setItem(name, value) {
  return ls && ls.set(name, value);
}

function getItem(name, value) {
  return ls && ls.get(name);
}

function removerItem(name) {
  return ls && ls.remove(name);
}

const secureStorage = {
  setItem,
  getItem,
  removerItem,
};

export default secureStorage;
