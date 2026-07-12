const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchMe() {
  const response = await fetch(`${BASE_URL}/api/auth/me`, {
    credentials: "include",
  });

  if (response.status === 401) {
    return null;
  }

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export async function logout() {
  const response = await fetch(`${BASE_URL}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Logout failed");
  }
}
