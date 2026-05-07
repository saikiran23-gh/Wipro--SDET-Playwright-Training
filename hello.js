// Dog CEO API - Get random dog images and filter ones containing "retriever"
fetch("https://dog.ceo/api/breeds/image/random/10")
  .then(res => res.json())
  .then(result => result.message)
  .then(images => images.filter(url => url.includes("retriever")))
  .then(images => images.map(url => url.toUpperCase()))
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));


  // Cat Facts API - Get short cat facts (< 60 chars)
fetch("https://catfact.ninja/facts")
  .then(res => res.json())
  .then(result => result.data)
  .then(facts => facts.filter(f => f.length < 60))
  .then(facts => facts.map(f => f.fact))
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));

  // Fake Store API - Get expensive product titles (> $150)
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => products.filter(p => p.price > 150))
  .then(products => products.map(p => p.title))
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));


  // REST Countries API - Get countries with population > 50M
fetch("https://restcountries.com/v3.1/all")
  .then(res => res.json())
  .then(countries => countries.filter(c => c.population > 50000000))
  .then(countries => countries.map(c => c.name.common))
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));


  // Quotable API - Get quotes with short author names
fetch("https://api.quotable.io/quotes")
  .then(res => res.json())
  .then(result => result.results)
  .then(quotes => quotes.filter(q => q.author.length < 8))
  .then(quotes => quotes.map(q => q.content))
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));



  // SpaceX API - Get successful launch names
fetch("https://api.spacexdata.com/v4/launches")
  .then(res => res.json())
  .then(launches => launches.filter(l => l.success === true))
  .then(launches => launches.map(l => l.name))
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));


  // Rick and Morty API - Get alive characters
fetch("https://rickandmortyapi.com/api/character")
  .then(res => res.json())
  .then(result => result.results)
  .then(chars => chars.filter(c => c.status === "Alive"))
  .then(chars => chars.map(c => c.name))
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));



  // Open Brewery API - Get breweries from USA and map names
fetch("https://api.openbrewerydb.org/v1/breweries")
  .then(res => res.json())
  .then(breweries => breweries.filter(b => b.country === "United States"))
  .then(breweries => breweries.map(b => b.name))
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));



  // Agify API - Predict ages and filter > 30
fetch("https://api.agify.io/?name[]=john&name[]=michael&name[]=sarah")
  .then(res => res.json())
  .then(data => data.filter(p => p.age > 30))
  .then(data => data.map(p => `${p.name} - ${p.age}`))
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));


  // Universities API - Get universities in India and map names
fetch("http://universities.hipolabs.com/search?country=India")
  .then(res => res.json())
  .then(unis => unis.filter(u => u.name.includes("University")))
  .then(unis => unis.map(u => u.name))
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));