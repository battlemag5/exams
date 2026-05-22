# C++ Exam Tickets and Explanations

**1. Problems of C language, motivation for C++. Encapsulation. Access modifiers. Classes and Structs. Invariants of a class. Namespaces.**
C lacks proper abstractions, keeping data (`struct`) and logic (functions) separate, making it hard to maintain complex state. C++ introduces classes, grouping data and methods (encapsulation). Encapsulation hides internal implementation details to protect "invariants" (conditions that must always be true for the object to be valid). Access modifiers (`public`, `private`, `protected`) control visibility. In C++, `class` has default `private` access, while `struct` has default `public` access. Namespaces group related identifiers to prevent name collisions in large projects.

**Expanded Insight:** While C++ classes provide encapsulation, structs and classes are functionally identical except for default visibility (`private` for classes, `public` for structs). In high-performance systems, C++ classes are often paired with `extern "C"` to expose a C-compatible ABI boundary while keeping the implementation object-oriented.

**2. Const modifier for types (including pointers and references), functions, class functions.**
The `const` keyword makes an entity immutable. For pointers: `const int* p` (pointer to const data), `int* const p` (const pointer to mutable data), `const int* const p` (both const). For class methods, adding `const` at the end (`void foo() const`) guarantees the method won't modify the object's non-mutable fields. Const references (`const T&`) are crucial because they can bind to temporary objects (rvalues), extending their lifetime until the reference goes out of scope.

**Expanded Insight:** The `mutable` keyword allows specific class members to be modified even within `const` methods. This is widely used for thread-safe caching (e.g., a `mutable std::mutex` used to lock a read-only method) or lazy evaluation.

**3. Object lifetime. new and delete operators. Constructors and destructors. Explicit constructors. Member initializer list.**
Lifetimes: static (until program exit), automatic (until end of scope), dynamic (until explicit deletion). `new` allocates heap memory and calls the constructor. `delete` calls the destructor and frees memory. Constructors initialize objects; destructors (`~Class()`) free resources. `explicit` constructors prevent the compiler from performing unintended implicit type conversions. Member initializer lists initialize fields before the constructor body runs, which is mandatory for `const` fields and references, and avoids default-constructing and then assigning.

**Expanded Insight:** Beyond standard `new`, C++ provides `placement new`, which constructs an object in an already allocated memory buffer (e.g., `new (buffer) T();`). This is heavily used in game engines and custom allocators (like memory pools) to bypass the overhead of OS-level dynamic allocations.

**4. lvalue references. Difference from pointers. const references. Temporary objects and const lvalue references to them.**
An lvalue reference (`T&`) is an alias for an existing object. Unlike pointers, references cannot be null, must be initialized upon declaration, and cannot be reseated (reassigned to refer to another object). This makes them safer than pointers. Const lvalue references (`const T&`) can bind to temporary objects (prvalues), gracefully extending the temporary's lifetime to match the reference's scope.

**Expanded Insight:** The lifetime extension of temporaries via `const T&` only applies to the *direct* binding. It does not chain across function return boundaries. Returning a `const T&` to a local temporary from a function will still result in a dangling reference.

**5. Initialization in C++: default, value, direct, copy and aggregate. Comparison with initialization in C language.**
C++ has rich initialization rules: Default (garbage for primitives, default constructor for objects), Value (`T()` zeroes primitives, default constructs objects), Direct (`T v(args)` calls constructor), Copy (`T v = other`), and Aggregate (for simple structs without custom constructors). C++11 introduced List/Uniform initialization (`{}`) which prevents narrowing conversions and avoids "the most vexing parse" (treating variable declarations as function declarations), providing a more uniform approach than C.

**Expanded Insight:** Uniform initialization (`{}`) prevents "narrowing conversions" (e.g., `int x{3.14};` is a compiler error). It also eliminates C++'s notorious "Most Vexing Parse", where `Timer t(Time());` is parsed as a function declaration returning a `Timer`, whereas `Timer t{Time{}};` correctly creates an object.

**6. Copy constructors: its form, use cases and motivation. RVO/NRVO. Copy assign operator. Rule of 3.**
Copy constructor `T(const T&)` is called when passing by value, returning by value, or initializing an object from another. Return Value Optimization (RVO) and Named RVO (NRVO) allow the compiler to elide the copy constructor when returning objects, constructing them directly in the caller's memory. Copy assignment `T& operator=(const T&)` is used when assigning to an already initialized object. The Rule of 3 states: if a class requires a custom destructor, copy constructor, or copy assignment operator (usually due to manual resource management), it almost certainly requires all three.

**Expanded Insight:** Since C++17, Copy Elision (RVO) is *mandatory* for prvalues. This means you can return uncopyable and unmovable objects (like `std::mutex` or `std::atomic`) by value from a factory function, and the compiler is guaranteed to construct it directly in the caller's scope.

**7. Value categories in C++. lvalues, prvalues and xvalues. Examples. rvalue references. Typical use cases. std::move: motivation and pitfalls.**
Value categories describe expressions: `lvalue` has an address (e.g., variables), `prvalue` is a pure temporary (e.g., `2 + 2`), `xvalue` is an expiring value (e.g., result of `std::move`). `rvalue references` (`T&&`) bind to prvalues and xvalues, allowing modification of temporary objects. They are used for move semantics. `std::move` doesn't move anything; it unconditionally casts an expression to an rvalue reference (`xvalue`), signaling that its resources can be safely stolen. ==Pitfall: accessing an object after it has been moved from (its state is valid but unspecified).==

**Expanded Insight:** Internally, `std::move` is implemented as a simple `static_cast` to an rvalue reference: `static_cast<std::remove_reference_t<T>&&>(t)`. It emits absolutely no machine code; it merely changes the type expression to let the compiler choose an `&&` overload.

**8. Move semantics. Move constructors, move assign operators. copy-and-swap idiom. Rule of five.**
Move semantics optimize copying by "stealing" resources (e.g., pointers to heap data) from temporary/moved objects. Move constructor `T(T&&)` and move assignment `T& operator=(T&&)` leave the source object in a valid, empty state. The copy-and-swap idiom provides a strong exception guarantee by copying the source, then swapping its internals with `this`. The Rule of 5 extends Rule of 3: if a class needs custom resource management, it should implement the destructor, copy ctor, copy assign, move ctor, and move assign.

**Expanded Insight:** Modern C++ advocates for the "Rule of Zero": you should design your classes so they do not require custom destructors or copy/move semantics at all. By exclusively using RAII types (like `std::unique_ptr`, `std::vector`), the compiler-generated defaults are naturally correct and safe.

**9. RAII idiom. Motivation (including exceptions). Scoped pointers example, two variants of its semantics. Concept of ownership.**
Resource Acquisition Is Initialization (RAII) ties resource management to object lifetime. Resources (memory, files, locks) are acquired in the constructor and released in the destructor. Because C++ guarantees destructors are called during scope exit or stack unwinding (exceptions), RAII prevents resource leaks. Ownership defines who is responsible for deleting a resource. Scoped pointers (like `unique_ptr`) represent exclusive ownership, deleting the resource when they go out of scope.

**Expanded Insight:** Concurrency primitives heavily rely on RAII. `std::lock_guard` and `std::unique_lock` acquire a mutex in their constructor and release it in their destructor, completely eliminating the risk of deadlocks caused by missed `unlock()` calls during exceptions or early returns.

**10. Casts in C++: C-style casts, static_cast, const_cast, reinterpret_cast. Overloading conversion operators. Explicit casts operators. Casts vs constructors.**
Avoid C-style casts `(T)expr` as they blindly attempt combinations of casts. `static_cast` performs compile-time safe conversions (e.g., `int` to `float`, `void*` to `T*`). `const_cast` adds or removes `const/volatile` qualifiers. `reinterpret_cast` reinterprets underlying bit patterns (dangerous). `dynamic_cast` performs runtime checks for polymorphic types. Conversion operators `operator T()` allow objects to be implicitly cast to `T`; marking them `explicit` requires using `static_cast`. Constructors can also act as implicit conversion tools unless marked `explicit`.

**Expanded Insight:** C++20 introduced `std::bit_cast`, which is a much safer alternative to `reinterpret_cast` for type punning. It copies the exact bits from one type to another of the same size, strictly respecting the active union member and avoiding Undefined Behavior associated with violating the strict aliasing rule.

**11. Operators overloading. Binary and unary operators overloading example. Indexing operator. * and -> operators. Placement new/delete operators overloading. Operators that can’t be overloaded.**
C++ allows redefining operators for custom types. Unary operators (e.g., `++`) and binary operators (e.g., `+`, `==`) can be overloaded as methods or free functions. Modifying operators (`+=`) are usually methods; symmetric operators (`+`) are free functions. `operator[]` is used for array-like access. `operator*` and `operator->` are overloaded by smart pointers to mimic raw pointers. `placement new` constructs an object in pre-allocated memory. Operators `::`, `.`, `.*`, and `?:` cannot be overloaded.

**Expanded Insight:** A modern best practice is the "Hidden Friend" idiom. By defining an overloaded operator (like `operator==`) as a `friend` directly *inside* the class definition, it is only found via Argument-Dependent Lookup (ADL). This keeps the global namespace clean and significantly speeds up compilation.

**12. Friends: functions and classes. Semantics, motivation and examples.**
The `friend` keyword grants a non-member function or another class access to the `private` and `protected` members of the class granting friendship. Motivation: needed for overloading operators like `operator<<` for streams, where the left operand is an `std::ostream`, meaning it cannot be a method of our class, but it still needs to access our class's private data to print it.

**Expanded Insight:** Friendship is neither inherited nor transitive. If Class A is a friend of Class B, and Class B is a friend of Class C, A is *not* a friend of C. Likewise, subclasses of A do not inherit friendship to B.

**13. Inheritance in C++. Types of inheritance in C++. Examples of good and bad class hierarchies. Liskov substitution principle. Subtyping polymorphism in C++. Private inheritance as composition.**
Inheritance creates `is-a` relationships (`public` inheritance). Liskov Substitution Principle states that a derived class object should be usable anywhere a base class object is expected without altering the program's correctness. Subtyping polymorphism allows calling derived implementations via base pointers. Bad hierarchies force derived classes to reject base methods. `private` inheritance models an `implemented-in-terms-of` relationship (like composition) and hides the base class interface from the outside.

**Expanded Insight:** The Non-Virtual Interface (NVI) pattern uses a public non-virtual base method to do preconditions/postconditions, which internally calls a private/protected virtual method. This gives the base class absolute control over the execution flow while letting derived classes customize the core behavior.

**14. Virtual functions in C++, pure virtual functions, abstract classes. Virtual destructors. Early and late binding conceptions.**
`virtual` functions enable late binding (runtime polymorphism). A pure virtual function (`virtual void foo() = 0;`) makes a class abstract, preventing its instantiation. Base classes designed for inheritance MUST have a `virtual` destructor to ensure the derived class's destructor is called when `delete` is invoked on a base pointer. Early binding resolves function calls at compile-time, while late binding uses the object's actual runtime type.

**Expanded Insight:** C++11 introduced the `override` and `final` specifiers. `override` ensures the method actually overrides a base class method (preventing silent bugs if signatures mismatch), while `final` prevents further derivation, allowing the compiler to perform devirtualization optimizations.

**15. Virtual function implementation. VMT. Virtual calls in constructors and destructors. Adjusting for pointers, static_casts for down casts.**
Virtual functions are implemented using a Virtual Method Table (VMT/vtable). Each polymorphic object contains a pointer (`vptr`) to its class's vtable. Calling a virtual function inside a constructor or destructor uses the local class's version (dynamic dispatch doesn't go "down" to derived classes yet to be constructed or already destroyed). Downcasting with `static_cast` simply adjusts pointers at compile time (unsafe if type is wrong); `dynamic_cast` checks the RTTI.

**Expanded Insight:** Modern compilers aggressively perform "Devirtualization". If the compiler can prove the exact type of a polymorphic object at compile time, it bypasses the vtable lookup entirely and emits a direct function call, restoring the speed of non-virtual functions.

**16. Multiple inheritance in C++. Motivation. Object layout. Adjusting pointers during casts.**
Multiple inheritance allows a class to inherit from several base classes. Object layout includes subobjects for each base, each potentially with its own `vptr`. When casting a derived pointer to one of the base pointers, the compiler silently adjusts the pointer's memory address to point to the correct subobject.

**Expanded Insight:** Multiple inheritance enables the Empty Base Class Optimization (EBCO). If a class inherits from an empty class (e.g., a stateless allocator or trait), the compiler can allocate 0 bytes to the base class subobject, ensuring the derived class size doesn't artificially inflate.

**17. Diamond inheritance. Virtual inheritance. Drawbacks of such a solution. Examples of hierarchies where virtual and nonvirtual diamond inheritance are needed.**
Diamond inheritance occurs when a class inherits from two classes that share a common base, resulting in two copies of the common base in the final derived class. `virtual` inheritance solves this by ensuring only one shared instance of the base class exists. Drawbacks include extra indirection (vbase pointers) and the requirement that the most-derived class must directly call the virtual base's constructor.

**Expanded Insight:** Virtual inheritance adds hidden overhead. Because the offset to the virtual base can differ depending on the final derived type, access to the virtual base's members must go through a hidden pointer (the `vbase` pointer) in the object layout, adding a memory fetch to variable accesses.

**18. RTTI, influence on object layout, dynamic_cast, typeid. Dynamic cast and multiple inheritance. Pros and cons of RTTI.**
Run-Time Type Information (RTTI) adds type metadata to the vtable. `typeid` returns a `std::type_info` object identifying the real type. `dynamic_cast` uses RTTI to perform safe downcasts and cross-casts (casting sideways in multiple inheritance). Pros: safe type checking at runtime. Cons: increases binary size and adds runtime overhead; usually disabled in performance-critical or embedded environments (`-fno-rtti`).

**Expanded Insight:** A lesser-known trick with RTTI is `dynamic_cast<void*>(ptr)`. It returns a pointer to the start of the most-derived object. This is highly useful in memory management or serialization to find the true starting address of a polymorphic object regardless of which base pointer you hold.

**19. Exceptions: basic syntax and mechanics, throwing by value, by reference or by pointer, standard exceptions. Stack unwinding. Exceptions in constructors and destructors. Safe exceptions philosophy.**
Exceptions (`throw`, `try`, `catch`) transfer control flow upon errors. Best practice: throw by value, catch by reference (`const std::exception&`). Standard exceptions include `std::runtime_error`, `std::logic_error`. Stack unwinding automatically calls destructors of local objects as the exception bubbles up. Exceptions in constructors cleanly abort creation. Destructors MUST NOT throw (`noexcept`); an exception escaping a destructor during stack unwinding calls `std::terminate`. Exception safety guarantees: Basic, Strong (commit/rollback), Nothrow.

**Expanded Insight:** You can catch an exception and store it for later (or pass it to another thread) using `std::current_exception()`, which returns an `std::exception_ptr`. Later, `std::rethrow_exception()` can be called to resume the unwinding process with the exact same polymorphic exception object.

**20. Generic programming and templates in C++. Syntax, basic mechanics and implementation. Monomorphization. Template specialization.**
Templates (`template <typename T>`) allow writing generic code. The compiler performs monomorphization: generating a concrete function/class for every unique type `T` used, ensuring zero-cost abstraction at runtime but increasing binary size and compile times. Templates can be explicitly specialized (`template <>`) to provide customized behavior for specific types.

**Expanded Insight:** Extensive use of templates can lead to "Code Bloat" (large binaries). While templates execute fast, generating thousands of slightly different functions can cause instruction cache (I-cache) misses on the CPU. Sometimes, type erasure (like `std::function`) is preferred to mitigate this.

**21. Template classes. Lazy instantiation of class templates. non-type argument. Templates vs inheritance. Static polymorphism. CRTP.**
Template classes define generic types. They use lazy instantiation: only methods that are actually called are compiled. Non-type arguments allow parameterizing by constants (e.g., `template <typename T, size_t N>`). Curiously Recurring Template Pattern (CRTP: `class Derived : public Base<Derived>`) enables static polymorphism. Methods in the base class can cast `this` to `Derived*` to call derived methods at compile-time without vtable overhead.

**Expanded Insight:** CRTP allows us to implement "Mix-ins". For example, a `template <typename T> class Printable` could implement a generic `print()` method that casts itself to `T` and reads its data, injecting printing capabilities into any class without paying the vtable penalty of dynamic interfaces.

**22. Templates implementation. 2 phase names lookup. SFINAE. enable_if.**
Templates are checked in 2 phases: 1. Before instantiation (syntax, non-dependent names). 2. After instantiation (dependent names relying on `T`). `typename` is needed for dependent types. SFINAE (Substitution Failure Is Not An Error) means if substituting `T` creates invalid syntax in the function signature, the compiler simply drops that candidate instead of failing. `std::enable_if` leverages SFINAE to conditionally disable template overloads.

**Expanded Insight:** When calling a templated method on a dependent object, you must use the `template` disambiguator to tell the compiler the next token is a template, not a less-than sign: `obj.template myMethod<int>();`. Without it, parsing fails during the first phase of template lookup.

**23. SFINAE based metaprogramming: intergral_constant, compile time and modifiers checkers. Compile-time execution (without constexpr or consteval), examples.**
Metaprogramming manipulates types at compile-time. Type traits like `std::is_same` use `std::integral_constant` as a base to provide a compile-time boolean `value`. We can compute values (like Fibonacci sequences) recursively using template instantiation. SFINAE can check if a type has a specific method or typedef, turning on/off features at compile time.

**Expanded Insight:** A popular SFINAE technique uses `std::void_t`. It maps any sequence of well-formed types to `void`. You can write `template <typename T, typename = std::void_t<>> struct has_foo : std::false_type {};` and specialize it with `std::void_t<decltype(std::declval<T>().foo())>` extending to `true_type`.

**24. Iterators in C++; Ranged-based for; initializer_list;**
Iterators abstract the traversal of containers, acting like pointers (`*`, `++`, `!=`). A container supports the range-based for loop (`for (auto& x : cont)`) if it provides `begin()` and `end()` methods returning iterators. `std::initializer_list` allows initializing containers with a brace-enclosed list of elements (e.g., `std::vector<int> v = {1, 2, 3};`).

**Expanded Insight:** The range-based for loop blindly desugars into `auto it = cont.begin(); it != cont.end(); ++it`. Beware when using it with proxy objects like `std::vector<bool>`. `auto& b : vec_of_bool` will fail to compile because dereferencing its iterator returns a proxy object by value, not a standard reference.

**25. Types deduction for template arguments. Example of ambiguous declarations. Cutting of references and const. Class template argument deduction.**
Template argument deduction infers `T` from the function arguments. If passing by value (`T arg`), references and top-level `const` are dropped. If passing by reference (`T& arg`), constness is preserved. Ambiguity arises if arguments deduce conflicting types for the same `T` (e.g., `max(int, double)`). C++17 introduced CTAD (Class Template Argument Deduction), allowing `std::pair p(1, 2.5);` instead of `std::pair<int, double>`.

**Expanded Insight:** With CTAD, you can provide Custom Deduction Guides. If you have a `template <typename T> class MyString`, you can write `MyString(const char*) -> MyString<std::string>;` to force the compiler to deduce `T = std::string` whenever someone passes a raw string literal.

**26. auto modifier. Rules of deduction for auto. Examples: ranged-based for with auto. decltype. auto return type. auto arguments types.**
`auto` deduces variable types using the same rules as template parameter deduction (drops references and top-level const). To keep references, use `auto&` or `const auto&` (crucial in range-based loops to avoid copying). `decltype(expr)` inspects the exact type and value category of an expression without evaluating it. `auto` can deduce return types in C++14, and `auto` in function parameters (C++20) is syntactic sugar for template functions.

**Expanded Insight:** C++14 introduced `decltype(auto)` specifically for generic programming. While `auto` strips references, `decltype(auto)` perfectly preserves the exact return type (including reference categories). It is the correct way to write a wrapper function that exactly forwards the return type of another function.

**27. Reference collapsing. Universal (forwarding) references. Examples of usage and perfect forwarding.**
When taking a reference to a reference, C++ uses reference collapsing rules: `& + & -> &`, `&& + & -> &`, `&& + && -> &&`. In templates, `T&&` (where `T` is a deduced type) acts as a Universal (Forwarding) Reference. It binds to both lvalues and rvalues. Combined with `std::forward<T>()`, it enables Perfect Forwarding: passing arguments to another function while perfectly preserving their lvalue/rvalue category.

**Expanded Insight:** The standard library implements `std::forward<T>(arg)` by static casting the argument to `T&&`. Because `T` is explicitly provided, reference collapsing ensures that an lvalue `T&` combined with `&&` remains an lvalue `&`, while a raw type `T` combined with `&&` becomes an rvalue `&&`.

**28. Lambdas in C++: basic syntax and implementation. Closure and capturing this. Applications: comporators, generators, functional-style work with collections.**
Lambdas `[captures](args) { body }` are inline anonymous functions. They compile to a hidden functor class (Closure). Captures (`[=]` for value, `[&]` for reference, `[this]`) become fields of this hidden class. They are heavily used as predicates in STL algorithms (`std::sort`, `std::find_if`), as custom deleters for smart pointers, and for localized logic.

**Expanded Insight:** C++14 allows "init-captures" (generalized captures), e.g., `[ptr = std::make_unique<int>(5)]() {}`. This is the *only* way to move move-only objects (like `unique_ptr`) into a lambda. C++20 further enhanced lambdas by allowing explicit template parameters: `[]<typename T>(T& x) {}`.

**29. Variadic templates. Parameter packs. Recursive functions for handling variadic templates, specialization and constexpr-if. Folding, and expanding the packs. Perfect forwarding for variadic templates and emplace_back.**
Variadic templates `template <typename... Args>` accept any number of arguments (Parameter Packs). Historically handled via recursion (base case + template function taking `T first, Args... rest`). C++17 added Fold Expressions `(args + ...)` to compactly apply operations over packs. They are commonly combined with perfect forwarding `std::forward<Args>(args)...` in functions like `emplace_back` to construct objects directly inside a container using multiple arguments.

**Expanded Insight:** Fold expressions can be used to execute operations in sequence using the comma operator. For example, `(void(std::cout << args << ' '), ...);` expands a parameter pack to print all variables sequentially. The `void` cast prevents overloading the comma operator from changing the behavior.

**30. Constexpr: expression, function and constexpr-if. Difference from const. Consteval. Custom literal types. Compile-time generation of arrays.**
`const` means runtime immutability; `constexpr` means the value can be evaluated at compile-time. `constexpr` functions can run at compile-time if given compile-time inputs. `if constexpr` (C++17) evaluates branches at compile-time, completely dropping dead code (great for replacing SFINAE). `consteval` (C++20) strictly guarantees the function is ONLY called at compile-time. This enables powerful meta-programming, like generating lookup tables or arrays during compilation.

**Expanded Insight:** C++20 introduced `constinit`. While `constexpr` requires both the initialization and the object itself to be immutable, `constinit` guarantees the variable is initialized at compile time (preventing the static initialization order fiasco), but the variable can still be mutated at runtime.

**31. Requires (modifier and expression) and concepts. Example of constraint for random-access container.**
Concepts (C++20) replace SFINAE with semantic constraints on template types. `requires` can be used as a clause to constrain a template (`template <typename T> requires std::integral<T>`), or as an expression to verify syntax validness. For example, ensuring a type `C` has `C::iterator` and supports `operator[]` provides clear, readable compiler errors when requirements aren't met.

**Expanded Insight:** Unlike SFINAE, Concepts support "Subsumption". The compiler understands concept hierarchies. If two template overloads match, the compiler will automatically choose the one whose concept is "more constrained" (e.g., `RandomAccessIterator` subsumes `ForwardIterator`), avoiding ambiguity errors.

**32. Smart pointers. Problems of raw pointers and motivation. Unique pointers and RAII. Custom deleters. Using unique_ptr in fields instead of raw pointers.**
Raw pointers lack ownership semantics, leading to memory leaks and double-free bugs. `std::unique_ptr` implements RAII for exclusive ownership with zero overhead (same size as raw pointer). It cannot be copied, only moved. It supports custom deleters (e.g., closing file handles). Using `unique_ptr` for class fields guarantees automatic cleanup and simplifies compiler-generated destructors.

**Expanded Insight:** The size of `std::unique_ptr` relies on the Empty Base Class Optimization. If you use a custom deleter that has no state (like a stateless lambda or a functor struct), `unique_ptr` remains exactly the size of a raw pointer. If the deleter holds state, the pointer's size increases.

**33. Smart pointers: shared pointers. Motivation, syntax and implementation. Difference between make_shared and just creating shared_ptr. enable_share_from_this. Cyclic references and weak_ptr.**
`std::shared_ptr` provides shared ownership via reference counting. It allocates a Control Block storing the reference count. `std::make_shared` is superior because it allocates the object and the control block in a single memory block, improving locality and performance. Cyclic references (A points to B, B points to A) prevent counts from reaching zero, causing leaks. `std::weak_ptr` resolves this by observing without owning (no strong ref count increment). `std::enable_shared_from_this` safely allows an object to create a `shared_ptr` to `this`.

**Expanded Insight:** While `make_shared` is faster and uses contiguous memory, it has a subtle downside: the memory for the object itself cannot be freed until the *weak count* also reaches zero (since the control block is embedded). If you have long-lived `weak_ptr`s, they might keep large object footprints implicitly allocated.

**34. Multithreading in C++: std::thread, std::jthread, connection between a thread object and execution thread. thread_local modifier and liferange of the corresponding objects.**
`std::thread` represents an OS thread. If an `std::thread` is destroyed without calling `.join()` or `.detach()`, `std::terminate` is invoked. C++20 introduced `std::jthread`, which automatically joins on destruction. `thread_local` variables have a lifecycle bound to the thread: they are created when the thread starts and destroyed when it exits, providing a separate instance for every thread.

**Expanded Insight:** To build thread pools, developers check `std::thread::hardware_concurrency()`, which returns the number of concurrent threads supported by the CPU implementation. Also, thread context switching is expensive, which is why user-level threads (coroutines, introduced in C++20) are gaining popularity.

**35. Multithreading in C++: data races and ways to fix them. std::mutex, RAII wrappers around it. Atomics.**
Data races occur when threads concurrently access shared data and at least one is writing. This is Undefined Behavior. To fix this, use `std::mutex` to ensure mutual exclusion. Never lock/unlock manually; use RAII wrappers like `std::lock_guard` or `std::unique_lock` to prevent deadlocks if exceptions occur. For simple counters and flags, `std::atomic<T>` provides lock-free, thread-safe hardware-level operations.

**Expanded Insight:** C++17 added `std::shared_mutex` which implements a Readers-Writer lock. Multiple threads can read data concurrently using `std::shared_lock<std::shared_mutex>`, but writers must use `std::unique_lock` to gain exclusive access, significantly boosting performance in read-heavy concurrent systems.

**36. Multithreading in C++: communication with threads; std::condition_variable; std::promise and std::future.**
`std::condition_variable` lets threads wait for events, putting the thread to sleep until `notify_one()` or `notify_all()` is called, avoiding CPU-wasting busy waits (requires `std::unique_lock`). `std::promise` and `std::future` provide a high-level channel to pass a result from one thread to another. The producer thread sets the value in the `promise`, and the consumer thread retrieves it by calling `.get()` on the `future`, blocking if the result isn't ready yet.

**Expanded Insight:** `condition_variable::wait()` is susceptible to "Spurious Wakeups", meaning the OS might wake up the thread even if `notify()` was not called. That's why `wait()` almost always takes a lambda predicate `cv.wait(lock, []{ return data_ready; })`, internally wrapping the wait in a `while(!pred())` loop.

