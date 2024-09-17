// типы в тс
/*
export default {}

// /* let q: any = 1;
// q = '1'

const a: number = 1;
const b: string = '1';
const c: boolean = true;
const d: null = null;
const e: undefined = undefined;
const f: object = {};

const g: Number = 1;
const j: Date = new Date();
const i: RegExp = //;

const n: false = false;
const k: 1 = 1;
const o: 'admin' = 'admin';


type TSumFn = (x: number, y: number) => number

const sum: TSumFn = (x: number, y: number): number => {
	return x + y;
}

sum(2, 3)

function sum2(x, y: number) : number{
	return x + y;
}


type TUser = {
	id: number,
	name: string
}


const admin: TUser = {
	id: 1,
	name: 'Dmitry'
}

console.log(typeof j);
console.log(j instanceof Date);
console.log(typeof admin);


class AsyncMath{
	x: number;
	y: number;

	constructor(x: number, y: number){
		this.x = x;
		this.y = y;
	}

	sum(onDone: (result: number) => void){
		setTimeout(() => {
			onDone(this.x + this.y)
		}, 200);
	}
}

const m1 = new AsyncMath(10, 20);
m1.sum(x => { console.log(x) });
*/ 



// использование типа never 

/*
function error(message: string): never {
    throw new Error(message);
}

// на примере роутера 
type Component = () => string
 
type RouteRecordBase = {
    path: string
}

type RouteRecordComponent = RouteRecordBase & {
    component: () => string,
    children?: RouteRecord[],
    redirect?: never
}

type RouteRecordRedirect = RouteRecordBase & {
    redirect: string,
    component?: never,
    children?: never
}

type RouteRecord = RouteRecordComponent | RouteRecordRedirect;

createRouter([
    {
        path: '/',
        component: () => 'home page',
    },
    {
        path: '/old',
        redirect: '/',
	
    },
    {
        path: '/products',
        component: () => 'home old',
        children: [
            {
                path: '/',
                component: () => '1'
            }
        ]
    }
])

function createRouter(routes: RouteRecord[]){
    routes
*/
 

// использование литеральных типов
/*
export default {};

type TUser = {
	id: number,
	login: string,
}

type TAdminUser = TUser & {
	type: 'admin',
	accessLevel: number
}

type TManagerUser = TUser & {
	type: 'manager',
	accessLevel: number,
	roles: string[]
}

type TClientUser = TUser & {
	type: 'client'
}

function loadUser(): TAdminUser | TManagerUser | TClientUser{
	return {	
		type: 'admin',
		id: 1,
		login: 'some',
		accessLevel: 5
	}
}

let u1 = loadUser();

if(u1.type === 'admin'){
	u1
}
 */




