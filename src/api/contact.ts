import axios from "axios";
const url = "https://revue.co.jp/mail.php";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6IjczZTc4NTlkLTQ5ZTMtNGE0Zi1iZmY3LTliMDNkZjFkYTBlYiIsInVzZXJJZCI6IjZkOTIzMmE5LWY5MTMtNGYxOC05MmYyLTJiNDRhMzRkMWVlZiIsImlhdCI6MTU4NzM5MzczOX0.dZSXIv6JvSSP9d1oKVuHajwCBa2qUzy0r_Xc_WX6n20";

interface ContactPropTypes {}
export const sendContact = async (data: ContactPropTypes): Promise<void> => {
  await axios.post(url, data, {
    headers: { authorization: `Bearer ${token}` },
  });
};
