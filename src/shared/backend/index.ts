class Backend {
  private token: string = "";

  constructor() {
    if (typeof window !== "undefined") {
      this.token = window.localStorage.getItem("token") || "";
    }
  }

  async login(username: string, password: string) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers,
        redirect: "follow",
        body: JSON.stringify({
          identifier: username,
          password: password,
        }),
      });
      if (response.status > 299) throw new Error(response.statusText);
      const data = await response.json();
      this.token = data.jwt;

      if (typeof window !== "undefined") {
        window.localStorage.setItem("token", data.jwt);
      }
      return data.user;
    } catch {
      return {};
    }
  }

  async catalog() {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${this.token}`);

    try {
      const response = await fetch(
        "http://localhost:1337/api/items?populate=*",
        {
          method: "GET",
          headers,
          redirect: "follow",
        }
      );
      if (response.status > 299) throw new Error(response.statusText);
      const data = (await response.json()).data;

      return data.map((catalog: any) => {
        return {
          ...catalog,
        };
      });
    } catch {
      return {};
    }
  }

  async item(id: string) {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${this.token}`);

    try {
      const response = await fetch(
        `http://localhost:1337/api/items/${id}?populate=*`,
        {
          method: "GET",
          headers,
          redirect: "follow",
        }
      );
      if (response.status > 299) throw new Error(response.statusText);
      const data = (await response.json()).data;

      return {
        ...data.attributes,
      };
    } catch {
      return {}; // MockData
    }
  }

  async card() {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${this.token}`);

    try {
      const response = await fetch("http://localhost:1337/api/cards", {
        method: "GET",
        headers,
        redirect: "follow",
      });
      if (response.status > 299) throw new Error(response.statusText);
      const data = (await response.json()).data;

      return data.map((card: any) => {
        return {
          ...card.attributes,
        };
      });
    } catch {
      return {}; // MockData
    }
  }
}

export const backend = new Backend();

export default backend;
