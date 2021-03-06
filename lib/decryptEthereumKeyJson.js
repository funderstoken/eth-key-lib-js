import { fromV3 } from "ethereumjs-wallet";

export default function decryptEthereumKeyJson(passphrase, keyJson) {
  let walletObj = null;

  try {
    const tmpWallet = fromV3(keyJson, passphrase);

    walletObj = {
      privateKeyBuffer: tmpWallet.getPrivateKey(),
      addressString: "0x" + tmpWallet.getAddress().toString("hex"),
      checksumAddressString: tmpWallet.getChecksumAddressString()
    };
  } catch (err) {
    console.error("Wrong passphrase,", err);
  }

  if (walletObj === null || walletObj === undefined) {
    throw new Error("Wrong passphrase");
  }

  return walletObj;
}
