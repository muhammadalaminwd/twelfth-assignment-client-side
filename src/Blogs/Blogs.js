import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mb-3 text-accent">Question Answer</h1>

      <div className="ml-5 mb-4">
        <h1 className="text-2xl text-primary font-bold">
          Q1: How will you improve the performance of a react application?
        </h1>
        <h2 className="text-2xl text-primary">
          <span className="font-bold">Ans:</span> I will improve the performance
          of a react application by optimizing it. Five ways of optimizing
          performance are given below:
          <br />
          1. Keeping component state local where necessary.
          <br />
          2. Memoizing React components to prevent unnecessary re-renders.
          <br />
          3. Code-splitting in React using dynamic import.
          <br />
          4. Windowing or list virtualization in React
          <br />
          5. Lazy loading images in React
          <br />
        </h2>
      </div>

      <div className="ml-5 mb-4">
        <h1 className="text-2xl text-primary font-bold">
          Q2: What are the different ways to manage a state in a React
          application?
        </h1>
        <h2 className="text-2xl text-primary">
          <span className="font-bold">Ans:</span> There are four main types of
          state you need to properly manage in your React application are given
          below:
          <br />
          1. Local State: Local state is data we manage in one or another
          component. For example, local state would be needed to show or hide a
          modal component or to track values for a form component, such as form
          submission, when the form is disabled and the values of a forms
          inputs.
          <br />
          2. Global State: Global state is data we manage across multiple
          components. Global state is necessary when we want to get and update
          data anywhere in our app, or in multiple components at least.
          <br />
          3. Server State: Data that comes from an external server that must be
          integrated with our UI state. Server state is a simple concept, but
          can be hard to manage alongside all of our local and global UI state.{" "}
          <br />
          4. URL State: Data that exists on our URLs, including the pathname and
          query parameters. URL state is often missing as a category of state,
          but it is an important one.
        </h2>
      </div>

      <div className="ml-5 mb-4">
        <h1 className="text-2xl text-primary font-bold">
          Q3: How does prototypical inheritance work?
        </h1>
        <h2 className="text-2xl text-primary">
          <span className="font-bold">Ans:</span> The Prototypal Inheritance is
          a feature in javascript used to add methods and properties in objects.
          It is a method by which an object can inherit the properties and
          methods of another object. Traditionally, in order to get and set the
          [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
          <br />
          What is prototype based inheritance? Prototype-based programming is a
          style of object-oriented programming in which behaviour reuse (known
          as inheritance) is performed via a process of reusing existing objects
          that serve as prototypes. This model can also be known as prototypal,
          prototype-oriented, classless, or instance-based programming.
        </h2>
      </div>

      <div className="ml-5 mb-4">
        <h1 className="text-2xl text-primary font-bold">
          Q4: You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h1>
        <h2 className="text-2xl text-primary">
          <span className="font-bold">Ans:</span> We can use loop, Array.find() , Array.findIndex() or forEach or map to find products by name. The ways are given below: <br />
          a) products.find(name); <br />
          b) products.map(name) <br />
          c) products.findIndex(function(post, index) <br />
        </h2>
      </div>

      <div className="ml-5 mb-4">
        <h1 className="text-2xl text-primary font-bold">
          Q5: What is a unit test? Why should write unit tests?
        </h1>
        <h2 className="text-2xl text-primary">
          <span className="font-bold">Ans:</span> Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. <br />
          We should write unit tests because Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently. Unit testing is testing the smallest testable unit of an application. It is done during the coding phase by the developers. To perform unit testing, a developer writes a piece of code (unit tests) to verify the code to be tested (unit) is correct.
        </h2>
      </div>
    </div>
  );
};

export default Blogs;
