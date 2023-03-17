export const Login = () => {
    return (
        <div className="w-screen h-screen flex bg-primary-500 text-white">
            <div className="h-96 w-80 mx-auto my-auto justify-center p-5">
                <div className="font-normal text-6xl leading-10 text-center">
                    Sign in
                </div>
                <div className="w-85 font-normal leading-5 text-xs text-center pt-10">
                    Sign in and start managing your candidates
                </div>
                <div className="mt-9">
                    <input placeholder="User name" className="p-4 bg-primary-600 w-76 h-11 rounded-xl" type="text" />
                </div>
                <div className="mt-8">
                    <input placeholder="Password" className="p-4 bg-primary-600 w-76 h-11 rounded-xl" type="text" />
                </div>
                <div className="mt-6">
                    <input className="" type="checkbox" name="" id="" />
                    <span className="ml-1">Remember me</span>
                    <span className="ml-4 text-secondary">Forgot password?</span>
                </div>
                <button className="mt-5  rounded-lg w-full h-9 bg-secondary">
                    Login
                </button>

            </div>
        </div>
    )
}

