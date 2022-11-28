import React from 'react';
import BlogItem from './BlogItem';


const blogs = [
    {
        id:1,
        question:"What are the different ways to manage a state in a React application?",
        answer:"As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components."
    },
    {
        id:2,
        question:"How does prototypical inheritance work?",
        answer:"Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and"
    },
    {
        id:3,
        question:"What is a unit test? Why should we write unit tests?",
        answer:"A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base"
    },
    {
        id:4,
        question:"React vs. Angular vs. Vue?",
        answer:"If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready. React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React."
    },
]
const Blog = () => {
    return (
        <div className='my-12 px-8 lg:px-20'>
            <h2 className='text-3xl'>Welcome to blog</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                {
                    blogs.map(blog => <BlogItem
                    key={blog.id}
                    blog={blog}
                    ></BlogItem>)
                }

            </div>
        </div>
    );
};

export default Blog;