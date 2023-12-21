export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //TODO: we wil not hardcode the server URL here
    const response = await(fetch("http://localhost:8080/products"));
    const data = await response.json();
    resolve(data);
  }
  );
}

export function fetchProductsByFilter(filter, sort) {
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

  return new Promise(async (resolve) => {
    //TODO: we wil not hardcode the server URL here
    const response = await fetch("http://localhost:8080/products?"+queryString);
    const data = await response.json();
    resolve(data);
  });
}
