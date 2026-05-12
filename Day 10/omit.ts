interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

type UserPreview = Omit<User, "email" | "password">  //omits email and password of a user obj

const preview: UserPreview = {
    name: "Saikiran",
    id: "237777"
}

 //preview.password;
 console.log(preview);