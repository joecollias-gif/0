this is posting react to github

GENERAL REACT

1)What is React
Frontend JS library
Developed by Facebook in 2011
Follows component based approach
Allows to create reusable UI components
Used to develop complex, interactive web as well as mobile UI
Open-sourced in 2015 and has strong foundation and large community

2)What are the featrues of React?
Uses virtual DOM
Does server-side rendering
Follows uni-directional data flow (one way data building)

3)List major advantages of React?
Increases applications performance
Can be used on client as well as server side
Readability is improved
Easy to integrate
Easy to write UI test cases

4)What are limitations of React?
Not a full scale framework (only the view)
Library is quite large
Difficult to understan for novice programmers
Uses inline templating and JSX

5)What is JSX?
JSX stands for JS XML
Utilizes the expressieness of JS with a HTML-like template syntax
Makes HTML easy to understand
It is robust
Boosts up the JS performance
JSX expression must have only one outermost element

6)What do you understand by Virtual DOM? Explain its working
Lightweight JS object which is the copy of the real DOM
Works in 3 steps
A)whenever any underlying data changes, the entire UI is re-rendered in the virtual Dom representaion
B)Then the difference btwn the previous DOM representation and the new one is calculated
C)Once the calculations are done, the real DOM will be updated with only the things that have acually changed

7)Differentiate between Real DOM and Virtual DOM
Virual DOM					Real DOM
Updates faster					Updates slower
Cant directly update HTML			Can directly update HTML
Updates if JSX element renders			If elements updates creates a new DOM
No DOM manipulation expense			DOM manipulation very expensive
No memory wastage  				Too much memory wastage

8)Why browsers cant read JSX?
JSX is not a regular JS
Browsers can read JS objects only
JSX file is converted to JS object by JSX transformer like Babel, before reaching browser
JSX file=>JSX transformer=>JS Object=>Browser

9)How React syntax changed from ES5 to ES6?
class keyword extends is now incorporated for =create class
sho(){..} takes place of display:function(){..},render function(){return(

10)How React is different from Angular?
React			Topic			Angular
view			ARCHITECTURE		mvc
ssr			RENDERING		csr
virtual dom		DOM			real dom
one way binding		DATA BINDING		two way binding
compile time		DEBUGGING		run time
facebook 		AUTHOR			google

REACT COMPONENTS

11)What do you understand from 'In React, everything is a component?
components are building blocks of React application's UI
components splits the UI in dependent, reusable pieces, and renders each piece independently
JS functions which takes arbitrary inputs and returns HTML representation

12)Explain the purpose of render() in React?
Every component must have render()
It returns single React element which is the representation of native DOM component
HTML elements inside render() must be enclosed inside an enclosing tag like <div><groups><forms>etc
Should be a pure function

13)How can you embed two components into one?
class MyComponent extends React.Component{
	render(){
		return(
			<div>
			<h1>Hello</h1>
			<Header/>
			<div>
		);
	}
}
class Header extends React.Component{
	render(){
		return(<h1>Header Component</h1>
	};
}
ReactDom.render(	
	<MyComponent/>,document.getElementById('content')
);

14)Explain props in React?
props are properties in React
read-only
pure (immutable)
always passed down from parent to child component
use to render dynamic data
class MyComponent extends React.Component{
	render(){
	return(
		<div>
			<h1>Hello</h1>
			<Header name="maxx" id="101"/>
		<div>
		);
	};
}
function Header (props){
	return(
		<div>
		<h1>Welcome:{props.name}</h1>
		<h1>Id is:{props.id}</h1>
	</div>
);}
ReactDOM.render(<MyComponent/>,document.getElementById('content));

15)What is a state in React and how is it used?
heart of react components
must be kept as simple as possible
determines components by rendering and behavior
creates dynamic and interactive components
it is accessed via this.state()
can update the state using this.setState()
classs MyComponent extendds React.Component{
	constructor(){
		super();
		this.state={
		name:'Maxx',
		id:'101'
	}
}
	render(){
		return(
			<div>
				<h1>Hello(this.state.name)</h1>
				<h2>Your Id is {this.state.id}</h2>
			<div>
		)
	}
ReactDOM.render{
	<MyComponent/>,document.getElementById('content');

16)Differentiate btwn state and props?
CONDITION					STATE		PROP					
receive initial value from parent component	yes		yes	
parent component can change value		no		yes
set default values inside component		yes		yes	
changes inside component			yes		no
set initial value for child components		yes		yes
changes inside child components 		no		yes

17)How can you update state of a component?
using this.setState()function you can change states of the component

18)What is arrow function? How is it used?
also called 'fat arrow function'(=>)
allows to bind context of components properly since auto-binding is not available by default in ES6
makes easier to work with higher order functions
GENERAL WAY
render(){
	return(<MyInput onChange={
		this.handleChange.bind(this)}/>)
	}
WITH ARROW FUNCTION
render(){
	return(<MyInput onChange={(e)=>
		this.handleOnChange(e)}/>)
	}

19)Differentiate btwn stateful and stateless components?
Stateful Component				Stateless Component
-stores info about components state 		-calculates the internal state of component
	change in memory			-do not have authority to change state
-have authority to change state			-contains no knowledge of past,  
-contains the knowledge of past,			current and possible future state changes
	current and possible 			-they receive the props from the stateful components
	future changes in state				and treat them as callback functions
-stateless components notifies them
	about the requirement of the
	state change, then they send
	down the props to them   
	 
20)What are the different phases of React component's lifecycle
1)Initial Phase			2)Updating Phase			3)Unmounting Phase
getDefaultProps()		componentsWillReceiveProps()
get initial state()	=>	shouldComponentUpdate()		=> 
componentWillMount()	=>	componentWillUpdate()		=>	componentWillUnmount()
render()		=>	render()			=>
componentDidMount()	 	componentDidUpdate()

21)Explain the lifecycle methods of React components in details?
-componentWillMount()is executed just before rendering both on client and server side
-componentDidMount()is executed after first render only on the client side
-componentWillReceiveProps()is invoked as soon as the props are received from parent class before another render is called
-shouldComponentUpdate()returns true or false value based on certain conditions
	if you want your component to update return true else return false. False by default
-componentWillUpdate()is called just before rendering takes place
-componentDidUpdate()is called just after rendering takes place
-componentWillUnmount()is called after the component is unmounted from the dom
	It is used to clear up memory spaces

22)What is an event in React?
events are the triggered reactions to specific actions like mouse hover, mouse click, key press etc
React events are similar to HTML, JS events

23)How do you create an event in React JS?
class Display extends React.Component((
	show(evt){
		//code
	};
	render(){
		//render the div with an onClick prop(value is a function)
		return <div onClick={this.show}>Click Me</div>;
	});

24)What are synthetic events in React?
cross browser wrappers around the browsers native event system
combines the browsers behaviors into one API
done to ensure events have consistent properties across different browsers

25)What do you understand by refs(references) in React?
used to return references to a particular element or component returned by render()
useful when we need DOM measurements or to add methods to components

26)List some of the cases when you should use refs?
managing focus, text selection or media playback
triggering imperative animations
integrating with third-party DOM libraries

27)How do you modularize code in React?
by using the export and import properties we can write components separately in different files

28)How forms are created in React?
HTML form elements maintain their own state in regular DOMs and update themselves based on user inputs
in React, state is contained in the state property of the component and is only updated via setState()
JS function is used for handling the form submission

29)What do you know about controlled and uncontrolled components?
Controlled Components				Uncontrolled Components
-do not maintain their own state		-maintain thier own state				
-data is controlled by parent component		-data is controlled by DOM
-takes in current values through props and 	-refs are used to get their current value
	notifies changes via callbacks  

30)What are high order components(HOCs)?
custom components witch wraps another component
accept dynamically provided child components
do not modify the input component
do not copy any behavior from the input component
are "pure" functions
<Higher Order Component/>
	<innerComponent/>

31)What can you do with HOC?
reuse code logic, logic and bootstrap abstraction
render high jacking
state abstraction and manipulation
props manipulation

32)What are pure components?
pure components are the simplest, fastest components which we can write
can replace any component that only has render()
enhances the simplicity and performance of the application
ReactDOM.render(<h1>Hello</h1>, document.getElementById('content'));

33)What is the significance of key in React?
used to identify unique Virtual DOM Elements with their corresponding data driving the UI
helps React to optimize rendering by recycling existing DOM elements
keys must be a unique number of string
instead of re-rendering, with keys React just re-orders the elements
application's performance increases

REACT REDUX

34)What were the major problems with MVC framework?
DOM manipulation was very expensive
slow and inefficient
memory wastage
because of circular dependencies, complicated model was created around models and views
	Controller=>Model=>View
	Controller<=>View

35)Explain Flux
architectural pattern that enforces uni-directional data flow
controls derived data and enables communication btwn multiple components
contains a central store which has authority for all data
any update in data must occur here only
provides stability to the application
reduces run-time errors
	     =>	 =>  =>	Action	=> 			
            ||		 	 || 
Action=>Dispatcher=>Store=>=>=>=>View
Store is center/heart of all flux application
 
36)What is Redux?
redux is one of the hottest libraries for front end development
redux is a predictable state container for JS apps
mostly used for applications State Management
applications developed with Redux are easy to test
helps to write applications that behave consistently and can run in different enviornments

37)What are 3 principles Redux follows?
-single source of truth
-state is read-only
-changes are made with pure functions

38)What is single source of truth?
redux uses Store for storing all the application state at one place
components state is stored in the Store and they receive updates from the store itself
single state tree makes it easier to keep track of changes over time and debug or inspect the application

39)List components of Redux?
-Action is an object that describes what happened
-Reducer is a place to determine how the state will change
-Store is state/object treee of the entire application saved in the store
-View displays the data provided by the Store

40)Show how the data flows through Redux?
Reducers=>	Actions=>				=>Container(Smart Component)
   ||							-pass data as props
One Store=>	Provider Component=>Re-render when-	=>Container(Dumb Component) 
Store					-store changes
Store
Store	 
-data is given to reducer that is how to see the view

41)How actions are defined in Redux?
must have type property that indicates the type of Action being performed
must be defined as String constant
can add more properties to it
actions are created using functions called Action Creators
function addTodo(text){
	return{
		type:ADD_TODO,
		text
	}
}

42)What is the role of reducer?
reducers are pure functions which specify how applications state changes in response to action
takes in previous state and an action and returns the new state
determines what sort of update needs to be done based on the type of the action and returns new values
returns the previous state if no work needs to be done
previous state+Action=>REDUCER=>new state

43)What is the significance of Store in Redux?
store is JS object which can hold the application's state
provides a few helper methods to access the state, dispatch actions and register listeners
with store the data state can be synchronized from the server level to the client layer without much hassle
makes the development of large applications easier and faster
import (createStore) from 'redux'
import todoApp from './reducers'
let store=createStore(reducer);

44)How is Redux different from Flux?
FLUX						Redux
store contains state and change logic		store and change logic are separate
multiple stores					single store
flat disconnected stores			single store with heirarchical reducers
singleton dispatcher				no dispatcher
React components subscribe to store		container components utilize connect
State is mutable 				state is immutable

45)What are advantages of Redux?
predictability
maintainability
server side rendering
developers tool
huge community
ease of testing
precise organiztion of code

REACT ROUTER

46)What is React Router?
powerful routing library
helps adding new screens and flows to the application
keeps URL in sync with data thats being displayed on the web page
has simple API

47)Why switch keyword is used in React Router v4?
'switch' keyword is used when you want to display only a single route to be rendered amongst several dfined routes
<switch>
	<route exact path='/'component-{Home}/>
	<route path='/posts/:id' component={Newpost}/>
	<route path='/posts' component={Post}/>
</switch>

48)Why do we need a Router in React?
helps in defining multiple routes inside the Router with each route leading to a unique view

49)List the advantages of React Router?
API is "all about components"
can be visualized as single root component
no need to manually set history value
separate packages for Web and Native platforms

50)How React Router is different from conventional routing?
TOPIC		CONVENTIONAL ROUTING			React Router		
pages involved	each view corresponds new file		only single HTML page involved
URL changes	HTTP request is sent to server		only the history attribute is changed
		and corresponding HTML received
feel 		user actually navigates accross		user is duped into thinking they are
		different pages for each view		accross different pages		


