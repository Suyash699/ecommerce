export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //TODO: we wil not hardcode the server URL here
    const response = await(fetch("http://localhost:8080/products"));
    const data = await response.json();
    resolve(data);
  }
  );
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    //TODO: we wil not hardcode the server URL here
    const response = await fetch("http://localhost:8080/products/"+id);
    const data = await response.json();
    resolve(data);
  });
}

export function fetchProductsByFilter(filter, sort, pagination) {
  //filter = {"category": ["smartphones", "laptops"]}
  //sort = {_sort: "price", _order: "desc"}
  //TODO: make this filter dynamic to support multiple values
  let queryString="";

  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for(let key in sort){
    queryString += `${key}=${sort[key]}&`;
  }
  
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    //TODO: we wil not hardcode the server URL here
    const response = await fetch("http://localhost:8080/products?"+queryString);
    const data = await response.json();
    const totalItems = response.headers.get("X-Total-Count");
    resolve({data:{products:data, totalItems:+totalItems}});
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/categories");
    const data = await response.json();
    resolve(data);
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/brands");
    const data = await response.json();
    resolve(data);
  });
}