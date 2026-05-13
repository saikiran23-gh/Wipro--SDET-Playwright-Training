
//The Generic API Wrapper
// async function fetchData<T>(url: string): Promise<T> {
//     const response = await fetch(url);
//     if(!response.ok) {
//         throw new Error('Network request Failed: ' + response.statusText)
//     }
//     const data: T = await response.json();
//     return data;
// }

// interface Album {
//     userId: number,
//     id: number,
//     title: string
// }

// async function demo() {
//     const url = "https://jsonplaceholder.typicode.com/albums/1";
//     const album = await fetchData<Album>(url);

//     console.log(`Album ID: ${album.id}`)
//     console.log(`Album Title: ${album.title}`)
// }

// demo();



// interface Album {
//   userId: number;
//   id: number;
//   title: string;
// }

// function fetchData<T>(url: string): Promise<T> {
//   return fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       return response.json();
//     })
//     .then((data) => data as T);
// }

// // Test the function
// fetchData<Album>("https://jsonplaceholder.typicode.com/albums/1")
//   .then((album) => {
//     console.log(album.title);
//     console.log(album.id);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


//Record Mapping for Configuration
// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

// const permissionMap:Record<Role, boolean> = {
//   [Role.Admin]: true,
//   [Role.Editor]: true,
//   [Role.Guest]: true,
// };
// console.log( permissionMap);


//Exhaustiveness Checking (The never Type)

// type TaskStatus = "Open" | "InProgress" | "Closed" | "Archived";

// function handleTask(status: TaskStatus) {
//   switch (status) {
//     case "Open":
//       console.log("Task is open");
//       break;

//     case "InProgress":
//       console.log("Task is in progress");
//       break;

//     case "Closed":
//       console.log("Task is closed");
//       break;

//     case "Archived":
//       console.log("Task is closed");
//       break;




//     default:
//       const neverValue: never = status;
//       console.log(neverValue);
//   }
// }
// handleTask("Open");
// handleTask("InProgress");
// handleTask("Closed");
// handleTask("Archived");
//


//Recursive Navigation Type
// type FolderNode = {
//   name: string;
//   files?: string[];
//   subFolders?: FolderNode[];
// };

// const folder: FolderNode = {
//   name: "Day 10",
//   files: ["omit.ts", "partial.ts"],
//   subFolders: [
//     {
//       name: "Images",
//       files: ["logo.png"],
//     },
//     {
//       name: "Docs",
//       files: ["readme.md"],
//     },
//   ],
// };

// console.log(folder);


//Template Literal Types for CSS

// type MarginValue = `${number}px` | `${number}rem` | `${number}vh`;

// let margin1: MarginValue = "10px";
// let margin2: MarginValue = "2rem";
// let margin3: MarginValue = "50vh";



// console.log(margin1);
// console.log(margin3);



//Conditional Types & the infer Keyword
// type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;


// function printValue<T>(value: T): UnwrapPromise<T> {
//   return value as UnwrapPromise<T>;
// }


// const text: UnwrapPromise<Promise<string>> = "Hello";
// console.log(text);


// const num: UnwrapPromise<Promise<number>> = 100;
// console.log(num);


// const bool: UnwrapPromise<boolean> = true;
// console.log(bool);


//The Union Manipulation Puzzle
type AllEvents = "click" | "dbclick" | "submit" | "reset" | "keypress";

type MouseEvents = Extract<AllEvents, "click" | "dbclick">;

type NonFormEvents = Exclude<AllEvents, "submit" | "reset">;


let a: MouseEvents = "click";
console.log(a);

let b: NonFormEvents = "keypress";
console.log(b);