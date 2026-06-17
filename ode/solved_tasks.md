# Solved Tasks

## Text Tasks from `Дифуры 2025 задачи.md` and `задачи диффуры.md`

### Task 1
**Equation:** $t^2 y y'' - (2y - t y')^2 = 0, \quad t>0$
**Solution:**
Substitute $y = u t^2$. Then $y' = u't^2 + 2ut$, and $y'' = u''t^2 + 4u't + 2u$.
Notice that $2y - ty' = 2ut^2 - t(u't^2 + 2ut) = -u't^3$.
Substituting into the equation:
$t^2 (ut^2) (u''t^2 + 4u't + 2u) - (-u't^3)^2 = 0$
$u t^4 (u''t^2 + 4u't + 2u) - (u')^2 t^6 = 0$
Divide by $t^6$: $u u'' - (u')^2 + \frac{4}{t} u u' + \frac{2}{t^2} u^2 = 0$.
This allows further integration to find $u(t)$ and subsequently $y(t)$.

### Task 2
**Equation:** $y''' - 8y = 3\cos(2t) - e^{2t}$
**Solution:**
Characteristic equation: $\lambda^3 - 8 = 0 \implies \lambda_1 = 2, \lambda_{2,3} = -1 \pm i\sqrt{3}$.
Homogeneous solution: $y_h = C_1 e^{2t} + e^{-t}(C_2 \cos(\sqrt{3}t) + C_3 \sin(\sqrt{3}t))$.
Particular solution for $3\cos(2t)$: $y_{p1} = A\cos(2t) + B\sin(2t)$.
Particular solution for $-e^{2t}$: Since $\lambda=2$ is a root, $y_{p2} = C t e^{2t}$.
Substitute and solve for constants.

### Task 3
**Problem:** Построить функцию Грина для:
$y'' - 16y = 0$
$y(0) = 0$
$y'(2) - 4y(2) = 0$
**Solution:**
Fundamental solutions: $y_1 = e^{4x}$, $y_2 = e^{-4x}$ or $\sinh(4x), \cosh(4x)$.
Left boundary condition $y(0)=0 \implies y_L = \sinh(4x)$.
Right boundary condition $y'(2) - 4y(2) = 0 \implies y_R = e^{4x}$ since $(e^{4x})' = 4e^{4x}$, and $4e^{8} - 4e^{8} = 0$.
Wronskian $W(\sinh(4x), e^{4x}) = \sinh(4x) \cdot 4e^{4x} - 4\cosh(4x)e^{4x} = -4e^{4x}(\cosh(4x) - \sinh(4x)) = -4$.
Green's function:
$G(x,s) = \begin{cases} \frac{\sinh(4x)e^{4s}}{-4}, & 0 \le x \le s \\ \frac{\sinh(4s)e^{4x}}{-4}, & s \le x \le 2 \end{cases}$

### Task 4
**Problem:** Какой минимальный порядок имеет ОДУ, если в его ФСР входят $x, e^x, \cos x$ и:
а) постоянные вещественные коэффициенты?
б) переменные вещественно-значимые коэффициенты?
**Solution:**
а) For constant coefficients, roots must be $\lambda=0$ (mult 2 for $x$), $\lambda=1$ (mult 1 for $e^x$), $\lambda = \pm i$ (mult 1 for $\cos x$ requires conjugate $\sin x$). Total degree = $2 + 1 + 2 = 5$.
б) For variable coefficients, we only need linear independence. Functions are $x, e^x, \cos x$. There are 3 linearly independent functions, so minimum order is 3.

### Task 5
**Problem:** Найти $e^{tA}$, $A^2 = -I$
**Solution:**
Since $A^2 = -I$, the matrix $A$ acts like the imaginary unit $i$.
Using Taylor series: $e^{tA} = \sum_{n=0}^{\infty} \frac{(tA)^n}{n!} = \cos(t)I + \sin(t)A$.

### Task 6
**Problem:** $t \cdot u_t + x \cdot u_x + (x+t)u_y = 0$
**Solution:**
Characteristics: $\frac{dt}{t} = \frac{dx}{x} = \frac{dy}{x+t}$
1) $\frac{dt}{t} = \frac{dx}{x} \implies \ln|x| = \ln|t| + C \implies \frac{x}{t} = C_1$.
2) $dt/t = dy/(x+t) \implies dy = (x/t + 1)dt = (C_1 + 1)dt \implies y = (C_1 + 1)t + C_2 \implies C_2 = y - (x/t + 1)t = y - x - t$.
General solution: $u(t,x,y) = F(\frac{x}{t}, y - x - t)$.

## Image Tasks

### Image Task 1 (from `Дифуры 2025 задачи.png`)
**Problem:**
Найти при каком $\alpha$ краевая задача имеет единственное решение:
$$y' - \begin{pmatrix} -2 & 2 \\ 0 & 2 \end{pmatrix} y = \begin{pmatrix} 0 \\ 13 \cos(3t) \end{pmatrix}, \quad t>0$$
$$\sup_{t \ge 0} \|y(t)\| < +\infty, \quad y(t) = (y_1(t), y_2(t))^T$$
$$\alpha y_1(0) + y_2(0) = 5$$

**Solution:**
From the system, the equation for $y_2$ is:
$y_2' - 2y_2 = 13\cos(3t)$.
General solution: $y_2(t) = C_2 e^{2t} + y_{2,p}(t)$.
Since we require bounded solutions ($\sup_{t \ge 0} \|y(t)\| < +\infty$), we must set $C_2 = 0$.
A particular solution has the form $y_{2,p}(t) = A\cos(3t) + B\sin(3t)$.
Substituting this yields $A = -2, B = 3$. Thus $y_2(t) = -2\cos(3t) + 3\sin(3t)$.

Now substitute $y_2$ into the equation for $y_1$:
$y_1' + 2y_1 = 2y_2 = -4\cos(3t) + 6\sin(3t)$.
General solution: $y_1(t) = C_1 e^{-2t} + y_{1,p}(t)$.
Since $e^{-2t} \to 0$ as $t \to \infty$, $C_1$ can be arbitrary and the solution remains bounded.
Finding $y_{1,p}$ yields $C=-2, D=0$, so $y_{1,p}(t) = -2\cos(3t)$.
$y_1(t) = C_1 e^{-2t} - 2\cos(3t)$.

Finally, apply the boundary condition:
$\alpha y_1(0) + y_2(0) = 5$.
$y_1(0) = C_1 - 2$, $y_2(0) = -2$.
$\alpha (C_1 - 2) - 2 = 5 \implies \alpha(C_1 - 2) = 7$.
For the boundary value problem to have a unique solution, this algebraic equation for $C_1$ must have exactly one solution. This occurs if and only if $\alpha \neq 0$.

**Answer:** $\alpha \neq 0$.


### Image Task 2 (from `Дифуры 2025 задачи 2.png`)
**Problem:**
Ф-ция Грина. Реш. краевой задачи?
$$y'' - 4y = f(t)$$
$$y'(0) = 0$$
$$y'(3) + 2y(3) = 0$$

**Solution:**
Homogeneous equation: $y'' - 4y = 0$.
Fundamental solutions: $e^{2t}, e^{-2t}$ or $\cosh(2t), \sinh(2t)$.
Left boundary condition: $y'(0) = 0 \implies y_L(t) = \cosh(2t)$.
Right boundary condition: $y'(3) + 2y(3) = 0$.
Let $y_R(t) = C_1 \cosh(2t) + C_2 \sinh(2t)$.
$y_R'(3) = 2C_1 \sinh(6) + 2C_2 \cosh(6)$.
$2y_R(3) = 2C_1 \cosh(6) + 2C_2 \sinh(6)$.
$y_R'(3) + 2y_R(3) = 2C_1(\sinh(6) + \cosh(6)) + 2C_2(\cosh(6) + \sinh(6)) = 2e^6(C_1 + C_2) = 0$.
Thus $C_1 = -C_2$. Let $C_1 = 1, C_2 = -1 \implies y_R(t) = \cosh(2t) - \sinh(2t) = e^{-2t}$.

Wronskian $W(y_L, y_R)$:
$W(\cosh(2t), e^{-2t}) = \cosh(2t) (-2e^{-2t}) - (2\sinh(2t))(e^{-2t}) = -2e^{-2t}(\cosh(2t) + \sinh(2t)) = -2e^{-2t}e^{2t} = -2$.

Green's function:
$G(t, s) = \begin{cases}
\frac{\cosh(2t) e^{-2s}}{-2}, & 0 \le t \le s \\
\frac{\cosh(2s) e^{-2t}}{-2}, & s \le t \le 3
\end{cases}$

### Image Task 3 (from `Дифуры 2025 задачи 3.png`)
**Problem:**
Решить. Найти кол-во решений.
$\begin{cases} 8 t y y' - 5 y^2 = 7 t^3 \\ y(1) = 1 \end{cases}$

**Solution:**
Use the substitution $z = y^2$, so $z' = 2yy'$.
The equation becomes: $4 t z' - 5 z = 7 t^3$.
Rewrite as a standard linear equation:
$z' - \frac{5}{4t} z = \frac{7}{4} t^2$.
The integrating factor is $\mu(t) = e^{-\int \frac{5}{4t} dt} = t^{-5/4}$.
Multiplying by $\mu(t)$:
$(z t^{-5/4})' = \frac{7}{4} t^2 t^{-5/4} = \frac{7}{4} t^{3/4}$.
Integrating both sides:
$z t^{-5/4} = \frac{7}{4} \cdot \frac{4}{7} t^{7/4} + C = t^{7/4} + C$.
$z = t^3 + C t^{5/4}$.
Since $z = y^2$, we have $y^2 = t^3 + C t^{5/4}$.
Apply the initial condition $y(1) = 1$:
$1^2 = 1^3 + C \cdot 1^{5/4} \implies 1 = 1 + C \implies C = 0$.
So, $y^2 = t^3$, which gives $y = \pm t^{3/2}$.
Since $y(1) = 1$, we must choose the positive branch:
$y(t) = t^{3/2}$.
**Number of solutions:**
At the point $(1, 1)$, the equation can be written as $y' = \frac{5y^2 + 7t^3}{8ty}$. The right-hand side is continuously differentiable in a neighborhood of $(1, 1)$, so by the Picard-Lindelöf theorem, there exists exactly **1** unique solution.

### Image Task 4 (from `Дифуры 2025 задачи 4.png`)
**Problem:**
Найти собственные значения и собственные функции краевой задачи:
$$t^2 y'' + 5 t y' + 4 y = \lambda y$$
$$y(1) = 0$$
$$3 y'(3) + 2 y(3) = 0$$

**Solution:**
Rewrite the equation as an Euler equation: $t^2 y'' + 5 t y' + (4 - \lambda) y = 0$.
Use the substitution $t = e^s$, converting it to an equation with constant coefficients:
$y_{ss} + 4 y_s + (4 - \lambda) y = 0$.
Characteristic equation: $k^2 + 4k + (4 - \lambda) = 0 \implies (k+2)^2 = \lambda$.
Let's analyze the cases for $\lambda$:
1) $\lambda \ge 0$: It can be shown that there are no non-trivial solutions satisfying both boundary conditions (the roots are real, leading to exponential/power functions which cannot satisfy $y(1)=0$ and $3y'(3)+2y(3)=0$ simultaneously unless trivial).
2) $\lambda < 0$: Let $\lambda = -\mu^2$ where $\mu > 0$. The roots are $k = -2 \pm i\mu$.
The general solution is $y(t) = t^{-2} \left( C_1 \cos(\mu \ln t) + C_2 \sin(\mu \ln t) \right)$.
Left boundary condition $y(1) = 0$:
$1^{-2} (C_1 \cos(0) + C_2 \sin(0)) = 0 \implies C_1 = 0$.
Thus, $y(t) = C_2 t^{-2} \sin(\mu \ln t)$.
To use the right boundary condition, we need the derivative:
$y'(t) = C_2 \left[ -2 t^{-3} \sin(\mu \ln t) + \mu t^{-3} \cos(\mu \ln t) \right]$.
Substitute into $3 y'(3) + 2 y(3) = 0$:
$3 C_2 \left[ -2 \cdot 3^{-3} \sin(\mu \ln 3) + \mu \cdot 3^{-3} \cos(\mu \ln 3) \right] + 2 C_2 \cdot 3^{-2} \sin(\mu \ln 3) = 0$.
Divide by $C_2 3^{-2}$ (since $C_2 \neq 0$):
$-\frac{2}{3} \sin(\mu \ln 3) + \frac{\mu}{3} \cos(\mu \ln 3) + \frac{2}{3} \sin(\mu \ln 3) = 0$.
$\frac{\mu}{3} \cos(\mu \ln 3) = 0$.
Since $\mu \neq 0$, we must have $\cos(\mu \ln 3) = 0 \implies \mu \ln 3 = \frac{\pi}{2} + \pi n$, for $n = 0, 1, 2, \dots$
$\mu_n = \frac{\pi(2n+1)}{2 \ln 3}$.

**Answer:**
Eigenvalues: $\lambda_n = -\left( \frac{\pi(2n+1)}{2 \ln 3} \right)^2, \quad n \in \mathbb{Z}_{\ge 0}$.
Eigenfunctions: $y_n(t) = t^{-2} \sin\left( \frac{\pi(2n+1)}{2 \ln 3} \ln t \right)$.

### Image Task 5 (from `Дифуры 2025 задачи 5.png`)
**Problem:**
Выписать все компоненты решения задачи:
$\begin{cases} x' = x - 3y + z \\ y' = x - 2y \\ z' = y - z \end{cases}$
$x(0) = 1, y(0) = 0, z(0) = -1$.
Сколько существует решений?

**Solution:**
The system is $X' = A X$ with $A = \begin{pmatrix} 1 & -3 & 1 \\ 1 & -2 & 0 \\ 0 & 1 & -1 \end{pmatrix}$.
Characteristic polynomial: $\det(A - \lambda I) = -\lambda^3 - 2\lambda^2 - 2\lambda = -\lambda(\lambda^2 + 2\lambda + 2) = 0$.
Eigenvalues: $\lambda_1 = 0, \lambda_{2,3} = -1 \pm i$.
Eigenvector for $\lambda_1 = 0$: $v_1 = (2, 1, 1)^T$.
Eigenvector for $\lambda_2 = -1+i$: Solving $(A - (-1+i)I)v = 0$ yields $v_2 = (-1+i, i, 1)^T$.
The complex solution is $X(t) = e^{(-1+i)t} \begin{pmatrix} -1+i \\ i \\ 1 \end{pmatrix} = e^{-t}(\cos t + i\sin t) \begin{pmatrix} -1+i \\ i \\ 1 \end{pmatrix}$.
Taking real and imaginary parts:
$\text{Re} = e^{-t} \begin{pmatrix} -\cos t - \sin t \\ -\sin t \\ \cos t \end{pmatrix}, \quad \text{Im} = e^{-t} \begin{pmatrix} \cos t - \sin t \\ \cos t \\ \sin t \end{pmatrix}$.
General solution:
$X(t) = C_1 \begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix} + C_2 e^{-t} \begin{pmatrix} -\cos t - \sin t \\ -\sin t \\ \cos t \end{pmatrix} + C_3 e^{-t} \begin{pmatrix} \cos t - \sin t \\ \cos t \\ \sin t \end{pmatrix}$.
Using initial conditions at $t=0$:
$x(0) = 2C_1 - C_2 + C_3 = 1$
$y(0) = C_1 + C_3 = 0 \implies C_3 = -C_1$
$z(0) = C_1 + C_2 = -1 \implies C_2 = -1 - C_1$
Substitute $C_2$ and $C_3$ into the first equation:
$2C_1 - (-1 - C_1) + (-C_1) = 1 \implies 2C_1 + 1 = 1 \implies C_1 = 0$.
Thus $C_3 = 0$ and $C_2 = -1$.
Substituting back, we get the components:
$x(t) = e^{-t}(\cos t + \sin t)$
$y(t) = e^{-t}\sin t$
$z(t) = -e^{-t}\cos t$
**Number of solutions:** Since this is a linear system of ODEs with continuous coefficients, the initial value problem has exactly **1** unique solution globally according to the Picard-Lindelöf theorem.

### Image Task 6 (from `Дифуры 2025 задачи 6.png`)
**Problem:**
При каких непрерывных $f(t)$ существуют решения краевой задачи
$y'' + (\pi/8)^2 y = f(t), \quad 0 < t < 4$
$y'(0) = y(4) = 0$?
Выписать все решения.

**Solution:**
We use the Fredholm alternative. First, consider the homogeneous problem:
$y'' + (\pi/8)^2 y = 0$.
General solution: $y_h(t) = C_1 \cos(\frac{\pi}{8}t) + C_2 \sin(\frac{\pi}{8}t)$.
Boundary conditions:
$y_h'(0) = C_2 \frac{\pi}{8} = 0 \implies C_2 = 0$.
$y_h(4) = C_1 \cos(\pi/2) = 0 \implies$ any $C_1$ works.
So the homogeneous problem has a non-trivial solution $\phi(t) = \cos(\frac{\pi}{8}t)$.
Because the problem is self-adjoint, the non-homogeneous problem has a solution if and only if $f(t)$ is orthogonal to $\phi(t)$:
$\int_0^4 f(t) \cos(\frac{\pi}{8}t) dt = 0$.
To find all solutions, we use variation of parameters.
$y(t) = c_1(t) \cos(\frac{\pi}{8}t) + c_2(t) \sin(\frac{\pi}{8}t)$.
This gives $c_1'(t) = -\frac{8}{\pi} f(t) \sin(\frac{\pi}{8}t)$ and $c_2'(t) = \frac{8}{\pi} f(t) \cos(\frac{\pi}{8}t)$.
Integrating from $0$ to $t$:
$y_p(t) = \frac{8}{\pi} \int_0^t f(s) \left[ \sin(\frac{\pi}{8}s) \cos(\frac{\pi}{8}t) - \cos(\frac{\pi}{8}s) \sin(\frac{\pi}{8}t) \right] ds = \frac{8}{\pi} \int_0^t f(s) \sin\left(\frac{\pi}{8}(t-s)\right) ds$.
The general solution to the boundary value problem is:
$y(t) = C \cos(\frac{\pi}{8}t) + \frac{8}{\pi} \int_0^t f(s) \sin\left(\frac{\pi}{8}(t-s)\right) ds, \quad C \in \mathbb{R}$.

**Answer:**
Solutions exist if and only if $\int_0^4 f(t) \cos(\frac{\pi}{8}t) dt = 0$.
All solutions are given by $y(t) = C \cos(\frac{\pi}{8}t) + \frac{8}{\pi} \int_0^t f(s) \sin\left(\frac{\pi}{8}(t-s)\right) ds$.

### Image Task 7 (from `Дифуры 2025 задачи 7.png`)
**Problem:**
Найти общее решение уравнения:
$x^3 y''' + 3 x^2 y'' + x y' - 27 y = 27 x^3, \quad x > 0$.

**Solution:**
This is an Euler equation. Use the substitution $x = e^t$, so $t = \ln x$. Let $y_t$ denote derivative with respect to $t$.
We have:
$x y' = y_t$
$x^2 y'' = y_{tt} - y_t$
$x^3 y''' = y_{ttt} - 3y_{tt} + 2y_t$
Substitute into the equation:
$(y_{ttt} - 3y_{tt} + 2y_t) + 3(y_{tt} - y_t) + y_t - 27y = 27 e^{3t}$
Simplifying:
$y_{ttt} - 27y = 27 e^{3t}$.
Characteristic equation of the homogeneous part: $\lambda^3 - 27 = 0$.
Roots: $\lambda_1 = 3$, $\lambda_{2,3} = -\frac{3}{2} \pm i\frac{3\sqrt{3}}{2}$.
Homogeneous solution:
$y_h(t) = C_1 e^{3t} + e^{-3t/2} \left( C_2 \cos\left(\frac{3\sqrt{3}}{2}t\right) + C_3 \sin\left(\frac{3\sqrt{3}}{2}t\right) \right)$.
For the particular solution $y_p$, since $27 e^{3t}$ matches the root $\lambda = 3$ (multiplicity 1), we look for $y_p = A t e^{3t}$.
$y_p' = A e^{3t}(1 + 3t)$
$y_p'' = A e^{3t}(6 + 9t)$
$y_p''' = A e^{3t}(27 + 27t)$
Substitute into the equation:
$A e^{3t}(27 + 27t) - 27(A t e^{3t}) = 27 e^{3t} \implies 27 A e^{3t} = 27 e^{3t} \implies A = 1$.
So $y_p(t) = t e^{3t}$.
The general solution in $t$ is $y(t) = y_h(t) + y_p(t)$.
Substitute back $t = \ln x, e^{3t} = x^3$:
$y(x) = C_1 x^3 + x^{-3/2} \left( C_2 \cos\left(\frac{3\sqrt{3}}{2}\ln x\right) + C_3 \sin\left(\frac{3\sqrt{3}}{2}\ln x\right) \right) + x^3 \ln x$.

### Image Task 8 (from `задачи диффуры.png`)
**Problem:**
Задача 19.
Найти производную $\frac{\partial y}{\partial \mu}\big|_{\mu=0}$, где $y(x, \mu)$ - решение задачи
$y' = 2x + \mu y^2, \quad y(0) = \mu - 1$.

**Solution:**
Пусть $u(x) = \frac{\partial y}{\partial \mu}(x, 0)$.
Продифференцируем уравнение по $\mu$:
$\frac{\partial}{\partial \mu} \left(\frac{\partial y}{\partial x}\right) = \frac{\partial}{\partial \mu} (2x + \mu y^2) \implies \frac{\partial}{\partial x} \left(\frac{\partial y}{\partial \mu}\right) = y^2 + 2\mu y \frac{\partial y}{\partial \mu}$.
При $\mu = 0$ получим:
$u'(x) = y(x, 0)^2$.

Найдём $y(x, 0)$. При $\mu=0$ начальная задача имеет вид:
$y'(x, 0) = 2x$
$y(0, 0) = 0 - 1 = -1$.
Решение: $y(x, 0) = \int 2x \, dx = x^2 + C$.
Так как $y(0, 0) = -1$, то $C = -1$, следовательно, $y(x, 0) = x^2 - 1$.

Подставляем $y(x, 0)$ в уравнение для $u'(x)$:
$u'(x) = (x^2 - 1)^2 = x^4 - 2x^2 + 1$.
Интегрируем, чтобы найти $u(x)$:
$u(x) = \int (x^4 - 2x^2 + 1) \, dx = \frac{x^5}{5} - \frac{2x^3}{3} + x + C_1$.

Найдём начальное условие для $u(x)$. Известно, что $y(0, \mu) = \mu - 1$.
Дифференцируя по $\mu$, получаем:
$\frac{\partial y}{\partial \mu}(0, \mu) = 1 \implies u(0) = 1$.
Подставляем в $u(x)$:
$u(0) = C_1 = 1$.
Таким образом, $u(x) = \frac{x^5}{5} - \frac{2x^3}{3} + x + 1$.

**Answer:** $\frac{x^5}{5} - \frac{2x^3}{3} + x + 1$.

### Image Task 9 (from `задачи диффуры 1.png`)
**Problem:**
Задача 9.
Найти фундаментальную систему решений для системы линейных уравнений
$$ \begin{pmatrix} \dot{x}_1 \\ \dots \\ \dot{x}_n \end{pmatrix} = \begin{pmatrix} 1 & \dots & 1 \\ \dots & \dots & \dots \\ 1 & \dots & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ \dots \\ x_n \end{pmatrix} $$

**Solution:**
Запишем систему в матричном виде $\dot{X} = A X$, где $A$ — матрица размера $n \times n$, состоящая из единиц.
Ранг матрицы $A$ равен 1. След матрицы (trace) равен $n$.
Следовательно, матрица $A$ имеет собственное значение $\lambda_1 = n$ кратности 1 и собственное значение $\lambda_2 = 0$ кратности $n-1$.

Для собственного значения $\lambda_1 = n$ собственный вектор $v_1$ удовлетворяет уравнению $A v_1 = n v_1$.
Легко видеть, что $v_1 = (1, 1, \dots, 1)^T$.
Соответствующее частное решение:
$X_1(t) = e^{nt} \begin{pmatrix} 1 \\ 1 \\ \dots \\ 1 \end{pmatrix}$.

Для собственного значения $\lambda_2 = 0$ собственные векторы $v$ удовлетворяют уравнению $A v = 0$, что равносильно уравнению $x_1 + x_2 + \dots + x_n = 0$.
Фундаментальная система решений этой алгебраической системы состоит из $n-1$ линейно независимых векторов. Возьмём, например:
$v_2 = (1, -1, 0, \dots, 0)^T$
$v_3 = (1, 0, -1, \dots, 0)^T$
$\dots$
$v_n = (1, 0, 0, \dots, -1)^T$.
Соответствующие решения имеют вид $X_k(t) = v_k e^{0t} = v_k$.

**Answer:**
Фундаментальная система решений состоит из $n$ векторов:
$X_1(t) = e^{nt} \begin{pmatrix} 1 \\ 1 \\ \dots \\ 1 \end{pmatrix}, \quad X_2(t) = \begin{pmatrix} 1 \\ -1 \\ 0 \\ \dots \\ 0 \end{pmatrix}, \quad X_3(t) = \begin{pmatrix} 1 \\ 0 \\ -1 \\ \dots \\ 0 \end{pmatrix}, \quad \dots, \quad X_n(t) = \begin{pmatrix} 1 \\ 0 \\ 0 \\ \dots \\ -1 \end{pmatrix}$.

### Image Task 10 (from `задачи диффуры 2.png`)
**Problem:**
Задача 26.
$$ \begin{cases} \frac{dy}{dt} = y(t) + \int_0^1 y(s)ds \\ y(0) = 1 \end{cases} $$

**Solution:**
Это интегро-дифференциальное уравнение. Обозначим определённый интеграл за константу:
$\int_0^1 y(s)ds = C$.
Тогда уравнение примет вид линейного дифференциального уравнения первого порядка с постоянным свободным членом:
$\frac{dy}{dt} = y(t) + C$.
Разделяем переменные:
$\frac{dy}{y+C} = dt \implies \ln|y+C| = t + C_1 \implies y(t) + C = C_2 e^t \implies y(t) = C_2 e^t - C$.

Используем начальное условие $y(0) = 1$:
$y(0) = C_2 e^0 - C = 1 \implies C_2 = 1 + C$.
Таким образом, решение имеет вид:
$y(t) = (1+C)e^t - C$.

Теперь найдём значение константы $C$, подставив полученную функцию $y(t)$ в определение $C$:
$C = \int_0^1 y(s)ds = \int_0^1 ((1+C)e^s - C)ds$.
Вычисляем интеграл:
$C = \left[ (1+C)e^s - Cs \right]_0^1 = \left( (1+C)e^1 - C \right) - \left( (1+C)e^0 - 0 \right)$.
$C = (1+C)e - C - (1+C) = e + Ce - 2C - 1$.
Переносим все члены с $C$ в одну сторону:
$C - Ce + 2C = e - 1 \implies C(3 - e) = e - 1 \implies C = \frac{e-1}{3-e}$.

Подставим найденное значение $C$ в выражение для $y(t)$:
$y(t) = \left(1 + \frac{e-1}{3-e}\right)e^t - \frac{e-1}{3-e} = \left(\frac{3-e+e-1}{3-e}\right)e^t - \frac{e-1}{3-e} = \frac{2e^t - e + 1}{3-e}$.

**Answer:** $y(t) = \frac{2e^t - e + 1}{3-e}$.

### Image Task 11 (from `задачи диффуры 6.png`)
**Problem:**
Задача 29.
Сколько решений имеет задача Коши?
$y''(x) - 2y'(x) - |y(x)| = -x^2 + 4x + 2, \quad x > 0$,
$y(0) = 0, \quad y'(0) = -2$.

Найти все решения.

**Solution:**
Функция $f(x, y, y') = 2y' + |y| - x^2 + 4x + 2$ удовлетворяет условию Липшица по переменным $y$ и $y'$. Следовательно, по теореме Пикара-Линделёфа (или теореме существования и единственности) задача Коши имеет ровно **одно** решение.

Найдем это решение. Так как $y(0) = 0$ и $y'(0) = -2 < 0$, то в некоторой правой окрестности точки $x=0$ функция убывает и $y(x) \le 0$. В этой области $|y(x)| = -y(x)$, и уравнение принимает вид:
$y'' - 2y' + y = -x^2 + 4x + 2$.

Характеристическое уравнение однородного: $\lambda^2 - 2\lambda + 1 = 0 \implies \lambda_{1,2} = 1$.
Общее решение однородного: $y_h(x) = (C_1 + C_2 x) e^x$.

Ищем частное решение в виде $y_p(x) = Ax^2 + Bx + C$.
$y_p' = 2Ax + B$
$y_p'' = 2A$
Подставляем в уравнение:
$2A - 2(2Ax + B) + Ax^2 + Bx + C = -x^2 + 4x + 2$
$Ax^2 + (B - 4A)x + (2A - 2B + C) = -x^2 + 4x + 2$.
Приравнивая коэффициенты, получаем систему:
$A = -1$
$B - 4A = 4 \implies B + 4 = 4 \implies B = 0$
$2A - 2B + C = 2 \implies -2 - 0 + C = 2 \implies C = 4$.
Значит, $y_p(x) = -x^2 + 4$.

Общее решение в области $y \le 0$:
$y(x) = (C_1 + C_2 x) e^x - x^2 + 4$.
Используем начальные условия:
$y(0) = C_1 + 4 = 0 \implies C_1 = -4$.
$y'(x) = C_2 e^x + (C_1 + C_2 x) e^x - 2x = (C_1 + C_2 + C_2 x) e^x - 2x$.
$y'(0) = C_1 + C_2 = -2 \implies -4 + C_2 = -2 \implies C_2 = 2$.
Получаем решение:
$y(x) = (2x - 4) e^x - x^2 + 4$.

Проверим, где это решение остается неположительным.
$y(2) = (4 - 4) e^2 - 4 + 4 = 0$.
При $x \in (0, 2)$ имеем $y(x) < 0$. При $x = 2$ функция достигает нуля и переходит в область положительных значений, так как $y'(2) = 2e^2 - 4 > 0$.

Для $x > 2$ имеем $y(x) > 0$, поэтому $|y(x)| = y(x)$, и уравнение принимает вид:
$y'' - 2y' - y = -x^2 + 4x + 2$.
Характеристическое уравнение: $\lambda^2 - 2\lambda - 1 = 0 \implies \lambda = 1 \pm \sqrt{2}$.
Частное решение ищем аналогично: $y_{p2} = Ax^2 + Bx + C$.
$2A - 2(2Ax + B) - (Ax^2 + Bx + C) = -x^2 + 4x + 2$.
$-Ax^2 + (-4A - B)x + (2A - 2B - C) = -x^2 + 4x + 2$.
$A = 1$
$-4 - B = 4 \implies B = -8$
$2 - 2(-8) - C = 2 \implies C = 16$.
$y_{p2}(x) = x^2 - 8x + 16 = (x-4)^2$.

Решение для $x \ge 2$:
$y(x) = D_1 e^{(1+\sqrt{2})x} + D_2 e^{(1-\sqrt{2})x} + (x-4)^2$.
Константы $D_1$ и $D_2$ находятся из условий сшивки (непрерывности $y$ и $y'$) в точке $x = 2$:
$y(2) = 0 \implies D_1 e^{2+2\sqrt{2}} + D_2 e^{2-2\sqrt{2}} + 4 = 0$
$y'(2) = 2e^2 - 4 \implies (1+\sqrt{2})D_1 e^{2+2\sqrt{2}} + (1-\sqrt{2})D_2 e^{2-2\sqrt{2}} - 4 = 2e^2 - 4$.
Пусть $E_1 = D_1 e^{2+2\sqrt{2}}$ и $E_2 = D_2 e^{2-2\sqrt{2}}$.
Система:
$E_1 + E_2 = -4$
$(1+\sqrt{2})E_1 + (1-\sqrt{2})E_2 = 2e^2$.
Отсюда $E_1 = \sqrt{2} - 2 + \frac{e^2}{\sqrt{2}}$ и $E_2 = - \sqrt{2} - 2 - \frac{e^2}{\sqrt{2}}$.
Следовательно, $D_1 = (\sqrt{2} - 2 + \frac{e^2}{\sqrt{2}}) e^{-2-2\sqrt{2}}$ и $D_2 = (- \sqrt{2} - 2 - \frac{e^2}{\sqrt{2}}) e^{-2+2\sqrt{2}}$.

**Answer:**
Задача имеет единственное решение.
При $x \in [0, 2]$: $y(x) = (2x - 4) e^x - x^2 + 4$.
При $x > 2$: $y(x) = D_1 e^{(1+\sqrt{2})x} + D_2 e^{(1-\sqrt{2})x} + (x-4)^2$, где константы $D_1$ и $D_2$ определены из условий сшивки $y(2)=0$ и $y'(2)=2e^2-4$.

### Image Task 12 (from `задачи диффуры 7.png`)
This image contains the exact same problem as **Image Task 5**, just rotated 180 degrees. See Image Task 5 for the solution.

### Image Task 13 (from `задачи диффуры 8.png`)
This image contains handwritten work for the problem:
$8 t y y' - 5 y^2 = 7 t^3, \quad y(1) = 1$
This is the exact same problem as **Image Task 3**. See Image Task 3 for the solution.

### Image Task 14 (from `задачи диффуры 9.png`)
**Problem:**
Задача 5.
Доказать, что каждое нетривиальное решение уравнения
$$y'' + \frac{1}{\sqrt{1+x^2}} y = 0$$
имеет на интервале $(0, +\infty)$ бесконечное множество нулей.

**Solution:**
Это классическая задача на применение теоремы Штурма сравнения (или осцилляционной теоремы).
Рассмотрим наше уравнение:
$y'' + q(x)y = 0$, где $q(x) = \frac{1}{\sqrt{1+x^2}}$.
Сравним его с уравнением Эйлера:
$z'' + \frac{k}{x^2}z = 0$.

Известно, что решения уравнения Эйлера $z'' + \frac{k}{x^2}z = 0$ имеют бесконечно много нулей на $(0, +\infty)$, если $k > \frac{1}{4}$ (так как корни характеристического уравнения комплексные и решение содержит тригонометрические функции от $\ln x$).
Возьмем, например, $k = 1$. Тогда решения уравнения $z'' + \frac{1}{x^2}z = 0$ осциллируют (имеют бесконечно много нулей).

Сравним коэффициенты $q(x)$ и $\frac{1}{x^2}$ при больших $x$:
Неравенство $\frac{1}{\sqrt{1+x^2}} > \frac{1}{x^2}$ эквивалентно $x^4 > 1 + x^2$, или $x^4 - x^2 - 1 > 0$.
Очевидно, что существует такое $x_0 > 0$, что для всех $x \ge x_0$ это неравенство выполняется (например, при $x \ge 2$ имеем $16 - 4 - 1 = 11 > 0$).

Таким образом, на промежутке $[x_0, +\infty)$ выполняется условие теоремы Штурма:
$q(x) = \frac{1}{\sqrt{1+x^2}} > \frac{1}{x^2}$.
Так как любое решение уравнения $z'' + \frac{1}{x^2}z = 0$ имеет на $[x_0, +\infty)$ бесконечно много нулей, то по теореме Штурма между любыми двумя нулями решения $z(x)$ лежит хотя бы один нуль решения $y(x)$.

Следовательно, любое нетривиальное решение $y(x)$ исходного уравнения также имеет на $(x_0, +\infty)$ (а значит, и на $(0, +\infty)$) бесконечное множество нулей.
Ч.т.д.

### Image Task 15 (from `задачи диффуры 10.png`)
**Problem:**
Задача 6.
Найти собственные значения и собственные функции задачи
$$x^2 y'' - x y' + y = \lambda y, \quad y(1) = y(2) = 0, \quad 1 < x < 2.$$

**Solution:**
Перепишем уравнение в виде:
$x^2 y'' - x y' + (1 - \lambda) y = 0$.
Это уравнение Эйлера. Сделаем замену независимой переменной $x = e^t$, тогда $t = \ln x$.
Производные преобразуются как:
$x y' = y_t$
$x^2 y'' = y_{tt} - y_t$.
Подставляем в уравнение:
$(y_{tt} - y_t) - y_t + (1 - \lambda) y = 0 \implies y_{tt} - 2y_t + (1 - \lambda) y = 0$.
Это линейное уравнение с постоянными коэффициентами.
Его характеристическое уравнение:
$k^2 - 2k + (1 - \lambda) = 0$.
Дискриминант $D/4 = 1 - (1 - \lambda) = \lambda$.
Корни: $k_{1,2} = 1 \pm \sqrt{\lambda}$.

Граничные условия переносятся на переменную $t$:
При $x = 1 \implies t = 0$, поэтому $y(0) = 0$.
При $x = 2 \implies t = \ln 2$, поэтому $y(\ln 2) = 0$.

Рассмотрим три случая для $\lambda$:
1) $\lambda > 0$: Корни $k_1, k_2$ вещественные и различные.
Общее решение: $y(t) = C_1 e^{(1+\sqrt{\lambda})t} + C_2 e^{(1-\sqrt{\lambda})t}$.
Из $y(0) = 0$ следует $C_1 + C_2 = 0 \implies C_2 = -C_1$.
Тогда $y(\ln 2) = C_1 (e^{(1+\sqrt{\lambda})\ln 2} - e^{(1-\sqrt{\lambda})\ln 2}) = 0$. Так как экспоненты различны, $C_1 = 0$, следовательно $C_2=0$. Нетривиальных решений нет.

2) $\lambda = 0$: Корни $k_1 = k_2 = 1$.
Общее решение: $y(t) = (C_1 + C_2 t) e^t$.
Из $y(0) = 0$ следует $C_1 = 0$.
Тогда $y(\ln 2) = C_2 (\ln 2) e^{\ln 2} = 2 C_2 \ln 2 = 0 \implies C_2 = 0$. Нетривиальных решений нет.

3) $\lambda < 0$: Пусть $\lambda = -\mu^2$, где $\mu > 0$.
Тогда корни комплексные: $k_{1,2} = 1 \pm i\mu$.
Общее решение: $y(t) = e^t (C_1 \cos(\mu t) + C_2 \sin(\mu t))$.
Граничное условие при $t=0$:
$y(0) = 1 \cdot (C_1 \cdot 1 + 0) = C_1 = 0$.
Остается $y(t) = C_2 e^t \sin(\mu t)$.
Граничное условие при $t=\ln 2$:
$y(\ln 2) = C_2 e^{\ln 2} \sin(\mu \ln 2) = 0$.
Для существования нетривиального решения (при $C_2 \neq 0$) должно выполняться:
$\sin(\mu \ln 2) = 0 \implies \mu \ln 2 = \pi n, \quad n \in \mathbb{N}$.
Отсюда $\mu_n = \frac{\pi n}{\ln 2}$.

Возвращаемся к собственным значениям:
$\lambda_n = -\mu_n^2 = -\left( \frac{\pi n}{\ln 2} \right)^2$.
Собственные функции в зависимости от $t$:
$y_n(t) = C_2 e^t \sin\left(\frac{\pi n}{\ln 2} t\right)$.
Возвращаясь к переменной $x$ ($x = e^t, t = \ln x$):
$y_n(x) = x \sin\left( \frac{\pi n}{\ln 2} \ln x \right)$.

**Answer:**
Собственные значения: $\lambda_n = -\left( \frac{\pi n}{\ln 2} \right)^2, \quad n \in \mathbb{N}$.
Собственные функции: $y_n(x) = x \sin\left( \frac{\pi n}{\ln 2} \ln x \right)$.

### Image Task 16 (from `задачи диффуры 11.png`)
**Problem:**
Задача 7.
Дана система линейных дифференциальных уравнений, $\omega$ - вещественный параметр. Указать все значения параметра $\omega$, при которых а) система имеет хотя бы одно периодическое решение, б) все решения являются периодическими?
$\frac{dx}{dt} = y + \sin \omega t$
$\frac{dy}{dt} = -x$

**Solution:**
Сведем систему к одному уравнению второго порядка. Продифференцируем второе уравнение:
$x = -y' \implies x' = -y''$.
Подставим в первое уравнение:
$-y'' = y + \sin \omega t \implies y'' + y = -\sin \omega t$.

Рассмотрим два случая:
1) $|\omega| = 1$ (то есть $\omega = \pm 1$).
В этом случае правая часть $-\sin(\pm t) = \mp \sin t$ совпадает с решением соответствующего однородного уравнения (резонанс).
Общее решение будет иметь вид $y(t) = C_1 \cos t + C_2 \sin t \pm \frac{1}{2} t \cos t$.
Из-за наличия слагаемого $\pm \frac{1}{2} t \cos t$, которое неограниченно возрастает, периодических решений нет вообще (даже для частного случая констант).

2) $|\omega| \neq 1$.
В этом случае резонанса нет. Ищем частное решение в виде $y_p(t) = A \sin \omega t$.
$y_p'' + y_p = -A\omega^2 \sin \omega t + A \sin \omega t = A(1-\omega^2)\sin \omega t = -\sin \omega t \implies A = \frac{1}{\omega^2-1}$.
Общее решение для $y$:
$y(t) = C_1 \cos t + C_2 \sin t + \frac{1}{\omega^2-1} \sin \omega t$.
Соответственно, $x(t) = -y'(t) = C_1 \sin t - C_2 \cos t - \frac{\omega}{\omega^2-1} \cos \omega t$.

Ответим на вопросы задачи:
а) **Хотя бы одно периодическое решение.**
Если мы выберем $C_1 = 0$ и $C_2 = 0$, то получим:
$y(t) = \frac{1}{\omega^2-1} \sin \omega t$ и $x(t) = -\frac{\omega}{\omega^2-1} \cos \omega t$.
Эти функции периодичны с периодом $\frac{2\pi}{|\omega|}$ (а при $\omega=0$ это константа 0). Таким образом, хотя бы одно периодическое решение существует при всех $\omega \neq \pm 1$.

б) **Все решения периодические.**
Для того чтобы *любое* решение (при произвольных $C_1$ и $C_2$) было периодическим, необходимо и достаточно, чтобы сумма периодических функций $\cos t$ (или $\sin t$) с периодом $T_1 = 2\pi$ и функции $\sin \omega t$ с периодом $T_2 = \frac{2\pi}{|\omega|}$ была периодической.
Сумма двух периодических функций периодична тогда и только тогда, когда отношение их периодов рационально:
$\frac{T_1}{T_2} = \frac{2\pi}{2\pi / |\omega|} = |\omega| \in \mathbb{Q}$.
Таким образом, параметр $\omega$ должен быть рациональным числом: $\omega \in \mathbb{Q}$.
Учитывая условие отсутствия резонанса ($|\omega| \neq 1$), получаем $\omega \in \mathbb{Q} \setminus \{-1, 1\}$.

**Answer:**
а) $\omega \in \mathbb{R} \setminus \{-1, 1\}$ (все вещественные числа, кроме $\pm 1$)
б) $\omega \in \mathbb{Q} \setminus \{-1, 1\}$ (все рациональные числа, кроме $\pm 1$)

### Image Task 17 (from `задачи диффуры 12.png`)
**Problem:**
Задача 8.
Найти фундаментальную систему решений для системы линейных уравнений
$$ \begin{pmatrix} \dot{x}_1 \\ \dots \\ \dot{x}_n \end{pmatrix} = \begin{pmatrix} 1 & \dots & 1 \\ \dots & \dots & \dots \\ 1 & \dots & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ \dots \\ x_n \end{pmatrix} $$

This problem is identical to **Image Task 9**. See Image Task 9 for the complete solution.

### Image Task 18 (from `задачи диффуры 13.png`)
**Problem:**
Задача 9.
Дана неоднородная система линейных уравнений, здесь $\omega$ - вещественный параметр. Указать все значения параметра $\omega$, при которых система имеет а) решение, ограниченное при $t \ge 0$, б) все решения являются ограниченными.
$\frac{dx}{dt} = y + \sin \omega t$
$\frac{dy}{dt} = -x$

**Solution:**
Эта система почти полностью совпадает с системой из Задачи 7 (Image Task 16), но здесь исследуется ограниченность решений, а не периодичность.
Сведем систему к одному уравнению второго порядка:
$x = -y' \implies x' = -y''$.
$-y'' = y + \sin \omega t \implies y'' + y = -\sin \omega t$.

Рассмотрим два случая:
1) $|\omega| \neq 1$.
В этом случае резонанса нет. Общее решение для $y$:
$y(t) = C_1 \cos t + C_2 \sin t + \frac{1}{\omega^2-1} \sin \omega t$.
Тогда $x(t) = -y'(t) = C_1 \sin t - C_2 \cos t - \frac{\omega}{\omega^2-1} \cos \omega t$.
Очевидно, что при любых значениях констант $C_1$ и $C_2$ функции $x(t)$ и $y(t)$ представляют собой суммы тригонометрических функций (синусов и косинусов), которые ограничены на всей числовой прямой, в том числе и при $t \ge 0$.
Следовательно, при $|\omega| \neq 1$ **все** решения системы являются ограниченными.

2) $|\omega| = 1$ (то есть $\omega = \pm 1$).
В этом случае наступает резонанс. Уравнение для $y$:
$y'' + y = \mp \sin t$.
Его общее решение имеет вид:
$y(t) = C_1 \cos t + C_2 \sin t \pm \frac{1}{2} t \cos t$.
Из-за наличия слагаемого $\pm \frac{1}{2} t \cos t$, амплитуда которого линейно растет со временем, решение $y(t)$ является неограниченным при $t \to +\infty$ при любом выборе констант $C_1, C_2$ (это слагаемое невозможно обратить в ноль выбором констант).
Следовательно, при $|\omega| = 1$ **нет ни одного** ограниченного решения.

Отвечаем на вопросы задачи:
а) Хотя бы одно решение ограничено: при $\omega \in \mathbb{R} \setminus \{-1, 1\}$.
б) Все решения ограничены: при $\omega \in \mathbb{R} \setminus \{-1, 1\}$.

**Answer:**
а) $\omega \in \mathbb{R} \setminus \{-1, 1\}$
б) $\omega \in \mathbb{R} \setminus \{-1, 1\}$

### Image Task 19 (from `задачи диффуры 14.png`)
**Problem:**
Задача 11.
Найти $\frac{\partial x}{\partial \mu}\big|_{\mu=0}$, производную по параметру $\mu$ функции $x(t)$ при $\mu=0$,
$\ddot{x} + x = 2\mu \sin t + \mu x^2, \quad x(0) = 0, \dot{x}(0) = 0$.
Точки обозначают производную по $t$.

**Solution:**
Пусть $u(t) = \frac{\partial x}{\partial \mu}(t, \mu)\big|_{\mu=0}$.
Сначала найдем решение невозмущенной задачи $x_0(t) = x(t, 0)$. Подставим $\mu = 0$ в исходную задачу:
$\ddot{x}_0 + x_0 = 0$
$x_0(0) = 0, \dot{x}_0(0) = 0$.
Очевидно, что решением этой задачи Коши является тождественный ноль: $x_0(t) \equiv 0$.

Продифференцируем обе части исходного дифференциального уравнения по параметру $\mu$:
$\frac{\partial}{\partial \mu} (\ddot{x} + x) = \frac{\partial}{\partial \mu} (2\mu \sin t + \mu x^2)$.
Меняя порядок дифференцирования в левой части, получаем:
$\frac{\partial^2}{\partial t^2} \left(\frac{\partial x}{\partial \mu}\right) + \frac{\partial x}{\partial \mu} = 2\sin t + x^2 + 2\mu x \frac{\partial x}{\partial \mu}$.
Подставим $\mu = 0$. При этом $x(t) = x_0(t) = 0$, а $\frac{\partial x}{\partial \mu} = u(t)$:
$\ddot{u} + u = 2\sin t + 0^2 + 0 \implies \ddot{u} + u = 2\sin t$.

Теперь найдем начальные условия для $u(t)$. Дифференцируем исходные начальные условия по $\mu$:
$x(0, \mu) = 0 \implies \frac{\partial x}{\partial \mu}(0, \mu) = 0 \implies u(0) = 0$.
$\dot{x}(0, \mu) = 0 \implies \frac{\partial \dot{x}}{\partial \mu}(0, \mu) = 0 \implies \dot{u}(0) = 0$.

Таким образом, для $u(t)$ мы получили задачу Коши:
$\begin{cases} \ddot{u} + u = 2\sin t \\ u(0) = 0 \\ \dot{u}(0) = 0 \end{cases}$

Решаем это уравнение. Характеристическое уравнение однородного $\lambda^2 + 1 = 0 \implies \lambda = \pm i$.
Общее решение однородного: $u_h(t) = C_1 \cos t + C_2 \sin t$.
Правая часть $f(t) = 2\sin t$ дает резонанс, поэтому ищем частное решение в виде $u_p(t) = t(A \cos t + B \sin t)$.
Вычисляем производные:
$\dot{u}_p = A \cos t + B \sin t + t(-A \sin t + B \cos t)$
$\ddot{u}_p = -2A \sin t + 2B \cos t - t(A \cos t + B \sin t) = -2A \sin t + 2B \cos t - u_p$.
Подставляем в уравнение:
$\ddot{u}_p + u_p = -2A \sin t + 2B \cos t = 2\sin t$.
Приравнивая коэффициенты, получаем:
$-2A = 2 \implies A = -1$
$2B = 0 \implies B = 0$.
Значит, $u_p(t) = -t \cos t$.

Общее решение: $u(t) = C_1 \cos t + C_2 \sin t - t \cos t$.
Используем начальные условия:
$u(0) = C_1 = 0 \implies C_1 = 0$.
$\dot{u}(t) = C_2 \cos t - \cos t + t \sin t$.
$\dot{u}(0) = C_2 - 1 = 0 \implies C_2 = 1$.
Окончательное решение: $u(t) = \sin t - t \cos t$.

**Answer:** $\sin t - t \cos t$.

### Image Task 20 (from `задачи диффуры 15.png`)
**Problem:**
Задача 12.
Найти решение задачи Коши и указать максимальный интервал существования решения.
$y'(t) = |3y(t) - 2t|, \quad y(0) = \frac{1}{9}$.

**Solution:**
Так как функция $f(t, y) = |3y - 2t|$ удовлетворяет условию Липшица по переменной $y$, то решение задачи Коши существует и единственно.

Обозначим выражение под модулем $z(t) = 3y(t) - 2t$.
В начальный момент времени $t = 0$:
$z(0) = 3y(0) - 0 = 3 \cdot \frac{1}{9} = \frac{1}{3} > 0$.
Следовательно, в некоторой окрестности точки $t=0$ выражение под модулем положительно, $|3y - 2t| = 3y - 2t$, и уравнение имеет вид:
$y' = 3y - 2t \implies y' - 3y = -2t$.

Это линейное уравнение первого порядка. Умножим его на интегрирующий множитель $e^{-3t}$:
$(y e^{-3t})' = -2t e^{-3t}$.
Интегрируем по частям:
$y e^{-3t} = \int -2t e^{-3t} dt = \frac{2}{3}t e^{-3t} - \int \frac{2}{3} e^{-3t} dt = \frac{2}{3}t e^{-3t} + \frac{2}{9} e^{-3t} + C$.
$y(t) = \frac{2}{3}t + \frac{2}{9} + C e^{3t}$.
Найдём константу $C$ из начального условия $y(0) = \frac{1}{9}$:
$\frac{2}{9} + C = \frac{1}{9} \implies C = -\frac{1}{9}$.
Таким образом, решение в области $z(t) > 0$ равно:
$y(t) = \frac{2}{3}t + \frac{2}{9} - \frac{1}{9}e^{3t}$.

Найдем, до какого момента $t$ сохраняется условие $z(t) > 0$:
$z(t) = 3y(t) - 2t = 2t + \frac{2}{3} - \frac{1}{3}e^{3t} - 2t = \frac{2 - e^{3t}}{3}$.
Неравенство $\frac{2 - e^{3t}}{3} > 0$ выполняется при $e^{3t} < 2$, то есть при $t < \frac{\ln 2}{3}$.
При $t = t_1 = \frac{\ln 2}{3}$ выражение обращается в нуль: $z(t_1) = 0$. Значение функции в этой точке:
$y(t_1) = \frac{2\ln 2}{9}$.

Для $t > t_1$ проверим знак $z(t)$. Так как $z'(t_1) = 3y'(t_1) - 2 = 3|0| - 2 = -2 < 0$, функция $z(t)$ убывает и становится отрицательной при переходе через $t_1$.
Значит, для $t > t_1$ мы имеем $|3y - 2t| = -(3y - 2t) = -3y + 2t$, и уравнение принимает вид:
$y' = -3y + 2t \implies y' + 3y = 2t$.

Умножаем на интегрирующий множитель $e^{3t}$:
$(y e^{3t})' = 2t e^{3t}$.
Интегрируем по частям:
$y e^{3t} = \int 2t e^{3t} dt = \frac{2}{3}t e^{3t} - \frac{2}{9} e^{3t} + D$.
$y(t) = \frac{2}{3}t - \frac{2}{9} + D e^{-3t}$.
Константу $D$ найдем из условия сшивки в точке $t_1 = \frac{\ln 2}{3}$ (в этой точке $e^{3t_1} = 2$, $e^{-3t_1} = 1/2$):
$y(t_1) = \frac{2}{3} \cdot \frac{\ln 2}{3} - \frac{2}{9} + D \cdot \frac{1}{2} = \frac{2\ln 2}{9}$.
$\frac{2\ln 2}{9} - \frac{2}{9} + \frac{D}{2} = \frac{2\ln 2}{9} \implies \frac{D}{2} = \frac{2}{9} \implies D = \frac{4}{9}$.

Решение для $t > \frac{\ln 2}{3}$:
$y(t) = \frac{2}{3}t - \frac{2}{9} + \frac{4}{9}e^{-3t}$.
Проверим знак $z(t)$ для этого решения:
$z(t) = 3y(t) - 2t = 2t - \frac{2}{3} + \frac{4}{3}e^{-3t} - 2t = \frac{4}{3}e^{-3t} - \frac{2}{3}$.
Условие $z(t) < 0$ означает $\frac{4}{3}e^{-3t} < \frac{2}{3} \implies e^{-3t} < \frac{1}{2} \implies e^{3t} > 2 \implies t > \frac{\ln 2}{3}$, что в точности совпадает с нашей областью.

Максимальный интервал существования решения — вся числовая прямая $\mathbb{R} = (-\infty, +\infty)$, так как решение не обращается в бесконечность за конечное время ни в положительном, ни в отрицательном направлении времени.

**Answer:**
Максимальный интервал существования: $(-\infty, +\infty)$.
Решение:
$$y(t) = \begin{cases} \frac{2}{3}t + \frac{2}{9} - \frac{1}{9}e^{3t}, & \text{при } t \le \frac{\ln 2}{3} \\ \frac{2}{3}t - \frac{2}{9} + \frac{4}{9}e^{-3t}, & \text{при } t > \frac{\ln 2}{3} \end{cases}$$

### Image Task 21 (from `задачи диффуры 16.png`)
**Problem:**
Задача 13.
Построить функцию Грина и решить краевую задачу, используя интегральное представление решения с помощью функции Грина:
$x^2 y'' + 2x y' = m(m+1)x^m, \quad m > 0, \quad y(1) = y'(1), \quad y(x)$ ограничена при $x \to 0$.

**Solution:**
Левая часть уравнения является точной производной: $x^2 y'' + 2x y' = (x^2 y')'$.
Уравнение уже записано в самосопряженном виде $(p(x) y')' = f(x)$, где $p(x) = x^2$, а правая часть $f(x) = m(m+1)x^m$.
Область определения задачи — полуинтервал $(0, 1]$.

Сначала найдем фундаментальные решения однородного уравнения $(x^2 y')' = 0$:
$x^2 y' = C_1 \implies y' = \frac{C_1}{x^2} \implies y(x) = -\frac{C_1}{x} + C_2$.
Фундаментальная система решений: $1$ и $\frac{1}{x}$.

Выберем функции $y_L(x)$ и $y_R(x)$, удовлетворяющие левому и правому краевому условиям соответственно.
1) Левое краевое условие: $y(x)$ ограничена при $x \to 0$.
Из линейной комбинации $C_1 \cdot 1 + C_2 \frac{1}{x}$ ограниченной является только константа.
Поэтому $y_L(x) = 1$.

2) Правое краевое условие: $y(1) = y'(1)$.
Пусть $y_R(x) = A + \frac{B}{x}$.
$y_R(1) = A + B$.
$y_R'(x) = -\frac{B}{x^2} \implies y_R'(1) = -B$.
Приравнивая, получаем $A + B = -B \implies A = -2B$.
Положив $B = -1$, получим $A = 2$.
Поэтому $y_R(x) = 2 - \frac{1}{x}$.

Вычислим определитель Вронского:
$W(y_L, y_R)(s) = y_L(s) y_R'(s) - y_L'(s) y_R(s) = 1 \cdot \frac{1}{s^2} - 0 \cdot (2 - \frac{1}{s}) = \frac{1}{s^2}$.
Умножим на $p(s) = s^2$:
$p(s) W(s) = s^2 \cdot \frac{1}{s^2} = 1$.

Построим функцию Грина $G(x, s)$:
$G(x, s) = \begin{cases} \frac{y_L(x) y_R(s)}{p(s) W(s)}, & 0 < x \le s \le 1 \\ \frac{y_L(s) y_R(x)}{p(s) W(s)}, & 0 < s \le x \le 1 \end{cases} = \begin{cases} 2 - \frac{1}{s}, & 0 < x \le s \\ 2 - \frac{1}{x}, & s \le x \le 1 \end{cases}$

Решение краевой задачи имеет вид интегрального представления:
$y(x) = \int_0^1 G(x, s) f(s) ds = \int_0^1 G(x, s) m(m+1)s^m ds$.
Разобьем интеграл на две части в точке $x$:
$y(x) = \int_0^x \left(2 - \frac{1}{x}\right) m(m+1)s^m ds + \int_x^1 \left(2 - \frac{1}{s}\right) m(m+1)s^m ds$.

Вычислим первый интеграл:
$I_1 = \left(2 - \frac{1}{x}\right) m(m+1) \left[ \frac{s^{m+1}}{m+1} \right]_0^x = \left(2 - \frac{1}{x}\right) m x^{m+1} = 2m x^{m+1} - m x^m$.

Вычислим второй интеграл:
$I_2 = m(m+1) \int_x^1 \left( 2 s^m - s^{m-1} \right) ds = m(m+1) \left[ \frac{2 s^{m+1}}{m+1} - \frac{s^m}{m} \right]_x^1$
$= m(m+1) \left( \left( \frac{2}{m+1} - \frac{1}{m} \right) - \left( \frac{2 x^{m+1}}{m+1} - \frac{x^m}{m} \right) \right)$.
Упростим выражение в первой скобке: $\frac{2}{m+1} - \frac{1}{m} = \frac{2m - m - 1}{m(m+1)} = \frac{m-1}{m(m+1)}$.
Тогда подстановка верхнего предела дает: $m(m+1) \frac{m-1}{m(m+1)} = m - 1$.
Подстановка нижнего предела: $-m(m+1) \frac{2 x^{m+1}}{m+1} + m(m+1) \frac{x^m}{m} = -2m x^{m+1} + (m+1)x^m$.
В итоге $I_2 = m - 1 - 2m x^{m+1} + (m+1)x^m$.

Сложим интегралы:
$y(x) = I_1 + I_2 = (2m x^{m+1} - m x^m) + (m - 1 - 2m x^{m+1} + (m+1)x^m)$.
Слагаемые с $x^{m+1}$ сокращаются:
$y(x) = -m x^m + (m+1) x^m + m - 1 = x^m + m - 1$.

Проверка:
$y(x) = x^m + m - 1$. Ограничена при $x \to 0$ (равна $m-1$).
$y(1) = 1 + m - 1 = m$.
$y'(x) = m x^{m-1} \implies y'(1) = m$. Краевое условие $y(1) = y'(1)$ выполнено.

**Answer:**
Функция Грина: $G(x, s) = \begin{cases} 2 - \frac{1}{s}, & 0 < x \le s \\ 2 - \frac{1}{x}, & s \le x \le 1 \end{cases}$
Решение: $y(x) = x^m + m - 1$.

### Image Task 22 (from `задачи диффуры 17.png`)
**Problem:**
Задача 14. При каких значениях параметра $a$ начальная задача имеет
- единственное решение?
- бесконечно много решений?
- не имеет решений?
$2 \frac{\partial z}{\partial x} - \frac{\partial z}{\partial y} = 2, \quad z = ay, \quad x = (a^2 + a - 2)y, \quad a \in \mathbb{R}.$
Обоснуйте ответ.

**Solution:**
Это линейное уравнение в частных производных первого порядка. Запишем характеристическую систему:
$\frac{dx}{2} = \frac{dy}{-1} = \frac{dz}{2}$.
Найдем первые интегралы.
Из $\frac{dx}{2} = \frac{dy}{-1} \implies x + 2y = C_1$.
Из $\frac{dy}{-1} = \frac{dz}{2} \implies z + 2y = C_2$.
Общее решение уравнения: $z + 2y = f(x + 2y)$, то есть $z(x, y) = f(x + 2y) - 2y$, где $f$ — произвольная функция.

Параметризуем начальную кривую (заданную при $t = y$):
$x(t) = (a^2 + a - 2)t$
$y(t) = t$
$z(t) = at$

Исследуем условие трансверсальности (нехарактеристичности) начальной кривой. Проекция начальной кривой на плоскость $Oxy$ должна пересекать проекции характеристик.
Определитель трансверсальности:
$\Delta = P \cdot y'(t) - Q \cdot x'(t) = 2 \cdot 1 - (-1) \cdot (a^2 + a - 2) = 2 + a^2 + a - 2 = a^2 + a = a(a+1)$.

Возможны следующие случаи:
1) $\Delta \neq 0$, то есть $a(a+1) \neq 0 \implies a \notin \{0, -1\}$.
В этом случае проекция начальной кривой нигде не касается проекций характеристик. По теореме Коши-Ковалевской (и методу характеристик) задача имеет **единственное решение**.
Можно найти его явно: подставляем начальную кривую в общее решение:
$at = f((a^2+a-2)t + 2t) - 2t \implies (a+2)t = f((a^2+a)t)$.
Обозначая $\xi = a(a+1)t$, находим $f(\xi) = \frac{a+2}{a(a+1)}\xi$. Таким образом, решение действительно строится однозначно.

2) $\Delta = 0$, то есть $a = 0$ или $a = -1$.
В этом случае проекция начальной кривой совпадает с проекцией характеристики. Задача Коши либо имеет бесконечно много решений (если значения $z$ согласованы с характеристикой), либо не имеет решений вообще.
Проверим согласованность (условие того, что сама начальная кривая является характеристикой в $\mathbb{R}^3$):
Должно выполняться соотношение $\frac{dx}{P} = \frac{dz}{R}$, то есть $P z'(t) - R x'(t) = 0$.
Вычислим это выражение:
$2 \cdot a - 2 \cdot (a^2 + a - 2) = 2a - 2a^2 - 2a + 4 = 4 - 2a^2$.
Для существования бесконечного числа решений должно быть $4 - 2a^2 = 0 \implies a = \pm \sqrt{2}$.
Однако мы рассматриваем случай $a \in \{0, -1\}$. Ни $0$, ни $-1$ не равны $\pm \sqrt{2}$.
Следовательно, условие согласованности не выполняется ни при $a=0$, ни при $a=-1$. Начальная кривая ни при каких $a$ не является характеристикой в пространстве.
Значит, при $a \in \{0, -1\}$ задача **не имеет решений**.

**Answer:**
- Единственное решение: при $a \in \mathbb{R} \setminus \{0, -1\}$.
- Бесконечно много решений: ни при каких $a$ (таких $a$ не существует, $\emptyset$).
- Не имеет решений: при $a \in \{0, -1\}$.

### Image Task 24 (from `задачи диффуры 19.png`)
**Problem:**
Задача 16.
Пусть $A = \begin{pmatrix} 0 & 1 & -1 \\ 1 & 0 & -1 \\ 2 & 2 & -3 \end{pmatrix}$.
При каких значениях $n$ нулевое решение системы $\frac{dy}{dt} = A^n y$ устойчиво?

**Solution:**
Найдем собственные значения матрицы $A$:
$\det(A - \lambda I) = \begin{vmatrix} -\lambda & 1 & -1 \\ 1 & -\lambda & -1 \\ 2 & 2 & -3-\lambda \end{vmatrix} = -\lambda(\lambda^2 + 3\lambda + 2) - (-3-\lambda + 2) - (2 + 2\lambda) =$
$= -\lambda(\lambda+1)(\lambda+2) + (\lambda+1) - 2(\lambda+1) = (\lambda+1)(-\lambda^2 - 2\lambda - 1) = -(\lambda+1)^3 = 0$.
Матрица имеет единственное собственное значение $\lambda = -1$ алгебраической кратности 3.

Матрица системы имеет вид $A^n$.
Собственными значениями матрицы $A^n$ являются числа $\lambda_i^n = (-1)^n$.
Рассмотрим два случая для целого показателя $n$:
1) Пусть $n$ — четное число ($n = 2k$).
Тогда собственные значения матрицы $A^n$ равны $(-1)^{2k} = 1$.
Так как собственные значения имеют строго положительную вещественную часть ($\text{Re}(\lambda) = 1 > 0$), нулевое решение системы $\frac{dy}{dt} = A^n y$ является **неустойчивым**.

2) Пусть $n$ — нечетное число ($n = 2k + 1$).
Тогда собственные значения матрицы $A^n$ равны $(-1)^{2k+1} = -1$.
Так как все собственные значения матрицы имеют строго отрицательную вещественную часть ($\text{Re}(\lambda) = -1 < 0$), нулевое решение является **асимптотически устойчивым**.
(Наличие жордановых клеток размером больше 1 не нарушает устойчивость, так как при $\text{Re}(\lambda) < 0$ экспоненциальное затухание подавляет любой полиномиальный рост от жордановых клеток).

**Answer:** При любых нечетных $n$.

### Image Task 26 (from `задачи диффуры 21.png`)
**Problem:**
Задача 19.
При каких значениях параметра $a$ нулевое решение системы является
а) асимптотически устойчивым
б) устойчивым, но не асимптотически
в) неустойчивым?
$\dot{x} = ax + y + (a+1)x^2$
*(Текст на изображении оборван, второе уравнение системы отсутствует, поэтому полное решение невозможно).*

### Image Task 27 (from `задачи диффуры 22.png`)
**Problem:**
Задача 20.
Построить матрицу Грина для краевой задачи
$\frac{dy}{dt} = \begin{pmatrix} 2 & 0 \\ 1 & 2 \end{pmatrix} y, \quad y(t) = \begin{pmatrix} y_1(t) \\ y_2(t) \end{pmatrix}, \quad y_1(0) = 0, y_2(1) = 0$.

**Solution:**
Матрица системы $A = \begin{pmatrix} 2 & 0 \\ 1 & 2 \end{pmatrix}$.
Найдем фундаментальную матрицу $\Phi(t) = e^{tA}$.
Представим $A = 2I + N$, где $N = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$, $N^2 = 0$.
Так как $2I$ и $N$ коммутируют, $e^{tA} = e^{2tI} e^{tN} = e^{2t} \begin{pmatrix} 1 & 0 \\ t & 1 \end{pmatrix} = \begin{pmatrix} e^{2t} & 0 \\ t e^{2t} & e^{2t} \end{pmatrix}$.

Краевые условия можно записать в виде $B_0 y(0) + B_1 y(1) = 0$, где
$B_0 = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad B_1 = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$.
Матрица Грина ищется в виде:
$G(t, s) = \begin{cases} \Phi(t) P_1(s), & 0 \le t < s \le 1 \\ \Phi(t) P_2(s), & 0 \le s < t \le 1 \end{cases}$
со свойствами:
1) Скачок при $t = s$: $G(s+0, s) - G(s-0, s) = I \implies \Phi(s) P_2(s) - \Phi(s) P_1(s) = I \implies P_2(s) - P_1(s) = \Phi^{-1}(s)$.
2) Краевые условия по переменной $t$: $B_0 G(0, s) + B_1 G(1, s) = 0 \implies B_0 \Phi(0) P_1(s) + B_1 \Phi(1) P_2(s) = 0$.

Обозначим $D = B_0 \Phi(0) + B_1 \Phi(1)$:
$\Phi(0) = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad \Phi(1) = \begin{pmatrix} e^2 & 0 \\ e^2 & e^2 \end{pmatrix}$.
$D = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} e^2 & 0 \\ e^2 & e^2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ e^2 & e^2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ e^2 & e^2 \end{pmatrix}$.
Так как $\det D = e^2 \neq 0$, матрица Грина существует и единственна.
$D^{-1} = \begin{pmatrix} 1 & 0 \\ -1 & e^{-2} \end{pmatrix}$.

Из системы для $P_1, P_2$ находим:
$P_1(s) = -D^{-1} B_1 \Phi(1) \Phi^{-1}(s)$
$P_2(s) = D^{-1} B_0 \Phi(0) \Phi^{-1}(s)$.

Вычислим $D^{-1} B_1 \Phi(1)$:
$B_1 \Phi(1) = \begin{pmatrix} 0 & 0 \\ e^2 & e^2 \end{pmatrix}$.
$D^{-1} B_1 \Phi(1) = \begin{pmatrix} 1 & 0 \\ -1 & e^{-2} \end{pmatrix} \begin{pmatrix} 0 & 0 \\ e^2 & e^2 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$.
Следовательно, $P_1(s) = \begin{pmatrix} 0 & 0 \\ -1 & -1 \end{pmatrix} \Phi^{-1}(s)$.

Вычислим $D^{-1} B_0 \Phi(0)$:
$B_0 \Phi(0) = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$.
$D^{-1} B_0 \Phi(0) = \begin{pmatrix} 1 & 0 \\ -1 & e^{-2} \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ -1 & 0 \end{pmatrix}$.
Следовательно, $P_2(s) = \begin{pmatrix} 1 & 0 \\ -1 & 0 \end{pmatrix} \Phi^{-1}(s)$.

Матрица $\Phi^{-1}(s) = e^{-sA} = \begin{pmatrix} e^{-2s} & 0 \\ -s e^{-2s} & e^{-2s} \end{pmatrix}$.

Теперь вычислим матрицу Грина.
Для $t < s$:
$G(t, s) = \Phi(t) P_1(s) = \begin{pmatrix} e^{2t} & 0 \\ t e^{2t} & e^{2t} \end{pmatrix} \begin{pmatrix} 0 & 0 \\ -1 & -1 \end{pmatrix} \begin{pmatrix} e^{-2s} & 0 \\ -s e^{-2s} & e^{-2s} \end{pmatrix} = \begin{pmatrix} e^{2t} & 0 \\ t e^{2t} & e^{2t} \end{pmatrix} \begin{pmatrix} 0 & 0 \\ (s-1)e^{-2s} & -e^{-2s} \end{pmatrix}$
$G(t, s) = \begin{pmatrix} 0 & 0 \\ (s-1)e^{2(t-s)} & -e^{2(t-s)} \end{pmatrix}$.

Для $t > s$:
$G(t, s) = \Phi(t) P_2(s) = \begin{pmatrix} e^{2t} & 0 \\ t e^{2t} & e^{2t} \end{pmatrix} \begin{pmatrix} 1 & 0 \\ -1 & 0 \end{pmatrix} \begin{pmatrix} e^{-2s} & 0 \\ -s e^{-2s} & e^{-2s} \end{pmatrix} = \begin{pmatrix} e^{2t} & 0 \\ t e^{2t} & e^{2t} \end{pmatrix} \begin{pmatrix} e^{-2s} & 0 \\ -e^{-2s} & 0 \end{pmatrix}$
$G(t, s) = \begin{pmatrix} e^{2(t-s)} & 0 \\ (t-1)e^{2(t-s)} & 0 \end{pmatrix}$.

**Answer:**
$$G(t, s) = \begin{cases} \begin{pmatrix} 0 & 0 \\ (s-1)e^{2(t-s)} & -e^{2(t-s)} \end{pmatrix}, & 0 \le t < s \le 1 \\ \begin{pmatrix} e^{2(t-s)} & 0 \\ (t-1)e^{2(t-s)} & 0 \end{pmatrix}, & 0 \le s < t \le 1 \end{cases}$$

### Image Task 28 (from `задачи диффуры 23.png`)
**Problem:**
Задача 21.
Какой вид имеет вектор $y_0$, чтобы решение задачи Коши
$\frac{dy}{dt} = \begin{pmatrix} 0 & -1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 2 \end{pmatrix} y(t), \quad y(0) = y_0$
при $t \to \infty$ росло не быстрее некоторой степени $t^k, k$ — неотрицательное целое.

**Solution:**
Матрица системы $A = \begin{pmatrix} 0 & -1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 2 \end{pmatrix}$ имеет блочно-диагональный вид.
Матричная экспонента $e^{tA}$ также будет иметь блочно-диагональный вид:
$e^{tA} = \begin{pmatrix} e^{t J_0} & 0 \\ 0 & e^{2t} \end{pmatrix}$, где $J_0 = \begin{pmatrix} 0 & -1 \\ 0 & 0 \end{pmatrix}$.
Так как $J_0^2 = 0$, то $e^{t J_0} = I + t J_0 = \begin{pmatrix} 1 & -t \\ 0 & 1 \end{pmatrix}$.
Таким образом, $e^{tA} = \begin{pmatrix} 1 & -t & 0 \\ 0 & 1 & 0 \\ 0 & 0 & e^{2t} \end{pmatrix}$.

Решение задачи Коши имеет вид $y(t) = e^{tA} y_0$.
Обозначим компоненты начального вектора $y_0 = (c_1, c_2, c_3)^T$. Тогда:
$y(t) = \begin{pmatrix} 1 & -t & 0 \\ 0 & 1 & 0 \\ 0 & 0 & e^{2t} \end{pmatrix} \begin{pmatrix} c_1 \\ c_2 \\ c_3 \end{pmatrix} = \begin{pmatrix} c_1 - c_2 t \\ c_2 \\ c_3 e^{2t} \end{pmatrix}$.

По условию задачи, решение при $t \to \infty$ должно расти не быстрее некоторой степени $t^k$.
Компоненты $y_1(t)$ и $y_2(t)$ растут полиномиально (как $t^1$ и $t^0$ соответственно), что удовлетворяет условию для любого целого $k \ge 1$.
Компонента $y_3(t) = c_3 e^{2t}$ растет экспоненциально. Экспонента $e^{2t}$ при $t \to \infty$ растет быстрее любой степени $t^k$.
Поэтому для того чтобы решение росло не быстрее полинома, необходимо и достаточно, чтобы экспоненциально растущая компонента тождественно равнялась нулю.
Это означает, что $c_3 = 0$.
Константы $c_1$ и $c_2$ могут быть любыми произвольными числами.

**Answer:**
$y_0 = \begin{pmatrix} c_1 \\ c_2 \\ 0 \end{pmatrix}$, где $c_1, c_2 \in \mathbb{R}$.

### Image Task 31 (from `задачи диффуры 26.png`)
**Problem:**
Задача 27.
Сколько решений в зависимости от значений $a$ и $n$ имеет уравнение
$y^{(n)} = 2 y^2 - a^2 x, \quad y(1) = 1, y'(1) = a$?

**Solution:**
Это обыкновенное дифференциальное уравнение $n$-го порядка. Задано ровно два начальных условия. Количество решений задачи Коши зависит от порядка уравнения $n$ по теореме Пикара-Линделёфа (теореме существования и единственности), так как правая часть $f(x, y) = 2y^2 - a^2 x$ является гладкой (и локально липшицевой).

Рассмотрим три случая:
1) **$n = 1$**: Уравнение имеет первый порядок: $y' = 2y^2 - a^2 x$.
Для ОДУ 1-го порядка достаточно одного начального условия $y(1) = 1$ для единственности решения. Второе условие $y'(1) = a$ является избыточным и может либо выполняться (тогда решение есть), либо противоречить уравнению (тогда решений нет).
Проверим совместимость условий: подставим $x=1, y=1$ в уравнение:
$y'(1) = 2(1)^2 - a^2 \cdot 1 = 2 - a^2$.
Для выполнения второго условия необходимо, чтобы $2 - a^2 = a \implies a^2 + a - 2 = 0$.
Корни этого уравнения: $a = 1$ или $a = -2$.
- Если $a \in \{1, -2\}$, то условия совместны, и задача имеет **ровно 1 решение**.
- Если $a \notin \{1, -2\}$, то условия противоречат уравнению, и задача имеет **0 решений**.

2) **$n = 2$**: Уравнение имеет второй порядок: $y'' = 2y^2 - a^2 x$.
Для ОДУ 2-го порядка необходимо и достаточно ровно двух начальных условий: значения функции $y(x_0)$ и её производной $y'(x_0)$. У нас заданы как раз $y(1)$ и $y'(1)$.
По теореме Коши, для любых значений $a$ задача имеет **ровно 1 решение** (локально).

3) **$n \ge 3$**: Уравнение имеет порядок $n \ge 3$.
Для единственности решения необходимо задать $n$ начальных условий: $y(x_0), y'(x_0), \dots, y^{(n-1)}(x_0)$.
В нашей задаче задано только два условия. Остальные $n-2$ начальных условий (такие как $y''(1), y'''(1)$ и т.д.) мы можем выбирать произвольно.
Каждому набору этих произвольных значений будет соответствовать свое уникальное решение.
Так как мы можем выбрать их бесконечным числом способов, задача имеет **бесконечно много решений** для любых $a$.

**Answer:**
- При $n = 1$: если $a \in \{1, -2\}$, то 1 решение; если $a \notin \{1, -2\}$, то 0 решений.
- При $n = 2$: для любого $a$ ровно 1 решение.
- При $n \ge 3$: для любого $a$ бесконечно много решений.

### Image Task 32 (from `задачи диффуры 27.png`)
**Problem:**
Задача 28.
Найти решение задачи Коши
$$xy' = \frac{y}{4x} - \frac{4}{xy}, \quad y(-2) = 4$$
как предел последовательности пикаровских приближений.

**Solution:**
Запишем уравнение в нормальной форме, разделив на $x$:
$y' = \frac{y}{4x^2} - \frac{4}{x^2 y}$.
Обозначим правую часть за $f(x, y) = \frac{y}{4x^2} - \frac{4}{x^2 y}$.

Пикаровские приближения строятся по итерационной формуле:
$y_n(x) = y_0 + \int_{x_0}^x f(s, y_{n-1}(s)) ds$.
Начальное приближение берется из начального условия:
$y_0(x) = y_0 = 4$.

Построим первое приближение $y_1(x)$:
$y_1(x) = 4 + \int_{-2}^x f(s, 4) ds$.
Вычислим значение функции $f(s, 4)$:
$f(s, 4) = \frac{4}{4s^2} - \frac{4}{s^2 \cdot 4} = \frac{1}{s^2} - \frac{1}{s^2} = 0$.

Тогда:
$y_1(x) = 4 + \int_{-2}^x 0 ds = 4$.

Так как $y_1(x) = 4$ в точности совпадает с $y_0(x) = 4$, то и все последующие итерации будут давать тот же самый результат:
$y_n(x) = 4$ для любого $n \ge 0$.
Предел этой стационарной последовательности очевиден:
$y(x) = \lim_{n \to \infty} y_n(x) = 4$.

Проверка: при $y=4$ левая часть $xy' = 0$, правая часть $\frac{4}{4x} - \frac{4}{4x} = 0$. Тождество выполняется.

**Answer:** $y(x) = 4$.

### Image Task 33 (from `задачи диффуры 28.png`)
**Problem:**
Задача 29.
Сколько решений имеет задача Коши?
$y''(x) - 2y'(x) - |y(x)| = -t^2 + 4t + 2, \quad t > 0$,
$y(0) = 0, \quad y'(0) = -2$.

### Image Task 34 (from `задачи диффуры 29.png`)
**Problem:**
Задача 30.
Построить непродолжаемое решение. Указать интервал существования решения.
$y' = |y + t|$,
$y(0) = -1$.

**Solution:**
Правая часть $f(t, y) = |y + t|$ удовлетворяет условию Липшица по $y$, поэтому решение существует и единственно.

Рассмотрим начальный момент $t=0$: выражение под модулем $y(0) + 0 = -1 < 0$.
Значит, в некоторой окрестности точки $t=0$ выражение $y+t$ отрицательно, и мы можем раскрыть модуль со знаком минус:
$y' = -(y + t) \implies y' + y = -t$.

Это линейное дифференциальное уравнение первого порядка. Решим его методом интегрирующего множителя:
Умножаем на $e^t$:
$(y e^t)' = -t e^t$.
Интегрируем по частям:
$y e^t = -\int t e^t dt = -t e^t + \int e^t dt = -t e^t + e^t + C$.
$y(t) = -t + 1 + C e^{-t}$.

Используем начальное условие $y(0) = -1$:
$1 + C = -1 \implies C = -2$.
Таким образом, решение при $y+t \le 0$ имеет вид:
$y(t) = -t + 1 - 2e^{-t}$.

Выясним, до какого момента времени сохраняется условие $y+t < 0$:
$y(t) + t = (-t + 1 - 2e^{-t}) + t = 1 - 2e^{-t}$.
Условие $1 - 2e^{-t} < 0 \implies 2e^{-t} > 1 \implies e^{-t} > \frac{1}{2} \implies e^t < 2 \implies t < \ln 2$.
При $t = \ln 2$ выражение под модулем обращается в нуль.
Значение функции в этой точке: $y(\ln 2) = -\ln 2 + 1 - 2 \cdot \frac{1}{2} = -\ln 2$.

Для $t > \ln 2$ выражение $y+t$ становится положительным (так как производная выражения $y+t$ в точке $\ln 2$ равна $y'(\ln 2) + 1 = |0| + 1 = 1 > 0$).
Раскрываем модуль со знаком плюс:
$y' = y + t \implies y' - y = t$.

Умножаем на интегрирующий множитель $e^{-t}$:
$(y e^{-t})' = t e^{-t}$.
Интегрируем по частям:
$y e^{-t} = \int t e^{-t} dt = -t e^{-t} + \int e^{-t} dt = -t e^{-t} - e^{-t} + D$.
$y(t) = -t - 1 + D e^t$.

Найдем константу $D$ из условия непрерывности решения в точке $t = \ln 2$:
$y(\ln 2) = -\ln 2 - 1 + D e^{\ln 2} = -\ln 2 - 1 + 2D$.
Приравниваем к значению, полученному из первой части:
$-\ln 2 - 1 + 2D = -\ln 2 \implies 2D = 1 \implies D = \frac{1}{2}$.
Значит, для $t > \ln 2$ решение имеет вид:
$y(t) = -t - 1 + \frac{1}{2}e^t$.

Убедимся, что $y+t > 0$ при $t > \ln 2$:
$y(t) + t = -1 + \frac{1}{2}e^t > -1 + \frac{1}{2}e^{\ln 2} = -1 + 1 = 0$. Условие выполняется.

Так как решение определено для всех $t \in \mathbb{R}$ и не уходит в бесконечность за конечное время, максимальный интервал существования — вся числовая прямая.

**Answer:**
Интервал существования: $(-\infty, +\infty)$.
Непродолжаемое решение:
$$y(t) = \begin{cases} -t + 1 - 2e^{-t}, & \text{при } t \le \ln 2 \\ -t - 1 + \frac{1}{2}e^t, & \text{при } t > \ln 2 \end{cases}$$

### Image Task 35 (from `задачи диффуры 30.png`)
**Problem:**
Задача 31.
Найти все гладкие функции $a(t)$, такие что уравнение
$y'' + a(t)y' + y = 0$,
имеет два решения $y_1(t), y_2(t)$, таких, что $y_1(t) - t y_2(t) = 0$.

**Solution:**
По условию $y_1(t) = t y_2(t)$. Обе эти функции являются решениями заданного уравнения.
Найдем производные от $y_1(t)$:
$y_1' = y_2 + t y_2'$
$y_1'' = 2y_2' + t y_2''$.
Подставим $y_1(t)$ в исходное уравнение:
$(2y_2' + t y_2'') + a(t)(y_2 + t y_2') + t y_2 = 0$.
Сгруппируем слагаемые:
$t(y_2'' + a(t) y_2' + y_2) + 2y_2' + a(t)y_2 = 0$.
Так как $y_2(t)$ тоже является решением уравнения, выражение в первой скобке тождественно равно нулю ($y_2'' + a(t) y_2' + y_2 = 0$).
Остается условие:
$2y_2' + a(t)y_2 = 0$.
Отсюда $y_2$ удовлетворяет уравнению первого порядка: $y_2' = -\frac{a(t)}{2} y_2$.
Его решение (с точностью до константы, которую можно принять равной 1, не ограничивая общности для поиска $a(t)$):
$y_2(t) = e^{-\frac{1}{2} \int a(t) dt}$.

Продифференцируем $y_2'$ еще раз:
$y_2'' = -\frac{a'(t)}{2} y_2 - \frac{a(t)}{2} y_2' = -\frac{a'(t)}{2} y_2 - \frac{a(t)}{2} \left( -\frac{a(t)}{2} y_2 \right) = \left( -\frac{a'(t)}{2} + \frac{a^2(t)}{4} \right) y_2$.

Подставим полученные $y_2'$ и $y_2''$ в исходное дифференциальное уравнение $y_2'' + a(t)y_2' + y_2 = 0$:
$\left( -\frac{a'(t)}{2} + \frac{a^2(t)}{4} \right) y_2 + a(t) \left( -\frac{a(t)}{2} \right) y_2 + y_2 = 0$.
Так как мы предполагаем наличие нетривиальных решений (иначе $y_1=y_2=0$ неинтересно), сократим на $y_2(t) \neq 0$:
$-\frac{a'(t)}{2} + \frac{a^2(t)}{4} - \frac{a^2(t)}{2} + 1 = 0 \implies -\frac{a'(t)}{2} - \frac{a^2(t)}{4} + 1 = 0$.
Умножим уравнение на $-4$:
$2a'(t) + a^2(t) - 4 = 0 \implies 2a' = 4 - a^2$.

Это уравнение с разделяющимися переменными. Очевидные постоянные решения: $a(t) \equiv 2$ и $a(t) \equiv -2$.
Для остальных случаев разделим переменные:
$\frac{2 da}{4 - a^2} = dt$.
Разложим левую часть на простейшие дроби:
$\frac{2}{4 - a^2} = \frac{1}{2-a} + \frac{1}{2+a}$.
Интегрируем:
$\int \left( \frac{1}{2-a} + \frac{1}{2+a} \right) da = \int dt \implies -\ln|2-a| + \ln|2+a| = t + C$.
$\ln\left|\frac{2+a}{2-a}\right| = t + C \implies \frac{2+a}{2-a} = K e^t$, где $K \neq 0$.
Выразим $a(t)$:
$2 + a = 2K e^t - aK e^t \implies a(1 + K e^t) = 2K e^t - 2 \implies a(t) = 2 \frac{K e^t - 1}{K e^t + 1}$.

Если $K > 0$, пусть $K = e^{C_1}$. Тогда $a(t) = 2 \frac{e^{t+C_1} - 1}{e^{t+C_1} + 1} = 2 \tanh\left(\frac{t+C_1}{2}\right)$. Эта функция гладкая на всей числовой прямой $\mathbb{R}$.
Если $K < 0$, пусть $K = -e^{C_1}$. Тогда $a(t) = 2 \frac{-e^{t+C_1} - 1}{-e^{t+C_1} + 1} = 2 \coth\left(\frac{t+C_1}{2}\right)$. Эта функция имеет разрыв (сингулярность) в точке $t = -C_1$, поэтому она не является гладкой на всей прямой $\mathbb{R}$.

Заметим, что постоянные решения $a(t) = 2$ и $a(t) = -2$ получаются из формулы при предельных переходах $K \to \infty$ и $K = 0$ соответственно, и они являются бесконечно гладкими.

### Image Task 37 (from `Дифуры 2025 задачи.png`)
**Problem:**
Задача 37. Найти при каком $\alpha$ краевая задача имеет единственное решение
$$ y' - \begin{pmatrix} -2 & 2 \\ 0 & 2 \end{pmatrix} y = \begin{pmatrix} 0 \\ 13 \cos(3t) \end{pmatrix}, \quad t \ge 0 $$
$$ \sup_{t \ge 0} \|y(t)\| < +\infty, \quad y(t) = (y_1(t), y_2(t))^T $$
$$ \alpha y_1(0) + y_2(0) = 5 $$

**Solution:**
Запишем систему уравнений в скалярном виде:
$\begin{cases} y_1' + 2y_1 - 2y_2 = 0 \\ y_2' - 2y_2 = 13 \cos(3t) \end{cases}$

Решим сначала второе уравнение (оно не зависит от $y_1$):
$y_2' - 2y_2 = 13 \cos(3t)$.
Общее решение однородного: $y_{2h} = C_2 e^{2t}$.
Частное решение ищем в виде $y_{2p} = A \cos(3t) + B \sin(3t)$.
$y_{2p}' = -3A \sin(3t) + 3B \cos(3t)$.
Подставляем в уравнение:
$-3A \sin(3t) + 3B \cos(3t) - 2(A \cos(3t) + B \sin(3t)) = 13 \cos(3t)$.
Приравнивая коэффициенты при $\cos(3t)$ и $\sin(3t)$, получаем систему:
$\begin{cases} 3B - 2A = 13 \\ -3A - 2B = 0 \implies 2B = -3A \implies B = -1.5A \end{cases}$
$3(-1.5A) - 2A = 13 \implies -4.5A - 2A = 13 \implies -6.5A = 13 \implies A = -2$.
Тогда $B = -1.5 \cdot (-2) = 3$.
Общее решение для $y_2$:
$y_2(t) = C_2 e^{2t} - 2\cos(3t) + 3\sin(3t)$.

По условию решение должно быть ограничено при $t \ge 0$ ($\sup \|y(t)\| < +\infty$).
Слагаемое $C_2 e^{2t}$ неограниченно растет при $t \to +\infty$ для любого $C_2 \neq 0$.
Чтобы $y_2(t)$ было ограниченным, необходимо положить $C_2 = 0$.
Следовательно, $y_2(t) = -2\cos(3t) + 3\sin(3t)$.

Теперь подставим $y_2(t)$ в первое уравнение:
$y_1' + 2y_1 = 2y_2 = -4\cos(3t) + 6\sin(3t)$.
Общее решение однородного: $y_{1h} = C_1 e^{-2t}$.
Частное решение ищем в виде $y_{1p} = C \cos(3t) + D \sin(3t)$.
$y_{1p}' = -3C \sin(3t) + 3D \cos(3t)$.
Подставляем:
$-3C \sin(3t) + 3D \cos(3t) + 2C \cos(3t) + 2D \sin(3t) = -4\cos(3t) + 6\sin(3t)$.
Система для коэффициентов:
$\begin{cases} 3D + 2C = -4 \\ -3C + 2D = 6 \end{cases}$
Умножим первое на 3, второе на 2 и сложим:
$9D + 6C = -12$
$4D - 6C = 12$
В сумме $13D = 0 \implies D = 0$.
Тогда $2C = -4 \implies C = -2$.
Общее решение для $y_1$:
$y_1(t) = C_1 e^{-2t} - 2\cos(3t)$.
Так как $e^{-2t} \to 0$ при $t \to +\infty$, функция $y_1(t)$ ограничена при любом значении константы $C_1$.

Вычислим значения функций в нуле:
$y_1(0) = C_1 - 2$
$y_2(0) = -2$

Подставим в граничное условие $\alpha y_1(0) + y_2(0) = 5$:
$\alpha (C_1 - 2) - 2 = 5 \implies \alpha C_1 - 2\alpha = 7 \implies \alpha C_1 = 2\alpha + 7$.
Для того чтобы краевая задача имела **единственное** решение, уравнение $\alpha C_1 = 2\alpha + 7$ должно иметь единственное решение относительно неизвестной $C_1$.
Линейное уравнение $\alpha x = \beta$ имеет единственное решение тогда и только тогда, когда коэффициент при неизвестной отличен от нуля.
Следовательно, $\alpha \neq 0$.
(При $\alpha = 0$ получим неверное равенство $0 = 7$, решений нет).

**Answer:** $\alpha \neq 0$ (при $\alpha \in \mathbb{R} \setminus \{0\}$).

### Image Task 38 (from `Дифуры 2025 задачи 1.png`)
**Problem:**
Найти общее решение уравнения в частных производных первого порядка:
$t \cdot u_t + x \cdot u_x + (x+t) \cdot u_y = 0$

**Solution:**
Это линейное однородное уравнение в частных производных первого порядка.
Запишем систему характеристических уравнений:
$\frac{dt}{t} = \frac{dx}{x} = \frac{dy}{x+t} = \frac{du}{0}$.

Из уравнения $du = 0$ следует, что вдоль характеристик функция $u$ постоянна.
Найдем первые интегралы системы.
Из уравнения $\frac{dt}{t} = \frac{dx}{x}$ получаем:
$\ln|t| = \ln|x| + \ln|C_1| \implies C_1 = \frac{x}{t}$.

Теперь используем уравнение $\frac{dt}{t} = \frac{dy}{x+t}$.
Выразим $x$ через $t$ и константу $C_1$: $x = C_1 t$.
Подставим в дифференциал:
$\frac{dt}{t} = \frac{dy}{C_1 t + t} = \frac{dy}{t(C_1 + 1)}$.
Домножим обе части на $t$ (при $t \neq 0$):
$dy = (C_1 + 1) dt$.
Интегрируем это уравнение:
$y = (C_1 + 1)t + C_2$.
Подставим обратно $C_1 = \frac{x}{t}$:
$y = \left(\frac{x}{t} + 1\right)t + C_2 = x + t + C_2$.
Отсюда получаем второй первый интеграл:
$C_2 = y - x - t$.

Общее решение уравнения представляет собой произвольную дифференцируемую функцию от первых интегралов:
$u(t, x, y) = F(C_1, C_2) = F\left(\frac{x}{t}, y - x - t\right)$, где $F$ — произвольная непрерывно дифференцируемая функция двух переменных.

**Answer:** $u(t, x, y) = F\left(\frac{x}{t}, y - x - t\right)$.

### Image Task 39 (from `Дифуры 2025 задачи 2.png`)
**Problem:**
Найти функцию Грина и записать решение краевой задачи:
$\begin{cases} y'' - 4y = f(t) \\ y'(0) = 0 \\ y'(3) + 2y(3) = 0 \end{cases}$

**Solution:**
Сначала найдем фундаментальные решения однородного уравнения $y'' - 4y = 0$. Характеристическое уравнение $\lambda^2 - 4 = 0$ дает корни $\lambda = \pm 2$. Базис решений можно выбрать в виде $e^{2t}, e^{-2t}$ или $\cosh(2t), \sinh(2t)$.

1) Найдем функцию $y_L(t)$, удовлетворяющую левому краевому условию $y'(0) = 0$.
Удобно искать её в виде линейной комбинации гиперболических функций: $y_L(t) = A \cosh(2t) + B \sinh(2t)$.
$y_L'(t) = 2A \sinh(2t) + 2B \cosh(2t)$.
$y_L'(0) = 2B = 0 \implies B = 0$.
Выберем $A = 1$, тогда $y_L(t) = \cosh(2t)$.

2) Найдем функцию $y_R(t)$, удовлетворяющую правому краевому условию $y'(3) + 2y(3) = 0$.
Ищем в виде $y_R(t) = C e^{2t} + D e^{-2t}$.
$y_R'(t) = 2C e^{2t} - 2D e^{-2t}$.
Подставим в краевое условие при $t=3$:
$(2C e^6 - 2D e^{-6}) + 2(C e^6 + D e^{-6}) = 0$
$4C e^6 = 0 \implies C = 0$.
Выберем $D = 1$, тогда $y_R(t) = e^{-2t}$.

3) Вычислим определитель Вронского базовых решений $y_L(s)$ и $y_R(s)$:
$W(s) = y_L(s) y_R'(s) - y_L'(s) y_R(s) = \cosh(2s) \cdot (-2 e^{-2s}) - 2 \sinh(2s) \cdot e^{-2s}$
$W(s) = -2 e^{-2s} (\cosh(2s) + \sinh(2s)) = -2 e^{-2s} \cdot e^{2s} = -2$.
Коэффициент при старшей производной в дифференциальном уравнении $p(s) = 1$. Следовательно, $p(s)W(s) = -2 \neq 0$.

4) Строим функцию Грина по стандартной формуле:
$G(t, s) = \begin{cases} \frac{y_L(t) y_R(s)}{p(s) W(s)}, & 0 \le t \le s \le 3 \\ \frac{y_L(s) y_R(t)}{p(s) W(s)}, & 0 \le s \le t \le 3 \end{cases}$
Подставляя найденные выражения:
$G(t, s) = \begin{cases} -\frac{1}{2} \cosh(2t) e^{-2s}, & 0 \le t \le s \\ -\frac{1}{2} \cosh(2s) e^{-2t}, & s \le t \le 3 \end{cases}$.

Решение краевой задачи задается интегральным оператором с ядром, равным функции Грина:
$y(t) = \int_0^3 G(t, s) f(s) ds$.

**Answer:**
Функция Грина: $G(t, s) = \begin{cases} -\frac{1}{2} \cosh(2t) e^{-2s}, & 0 \le t \le s \\ -\frac{1}{2} \cosh(2s) e^{-2t}, & s \le t \le 3 \end{cases}$
Решение задачи: $y(t) = -\frac{1}{2} e^{-2t} \int_0^t \cosh(2s) f(s) ds - \frac{1}{2} \cosh(2t) \int_t^3 e^{-2s} f(s) ds$.

### Image Task 40 (from `Дифуры 2025 задачи 3.png`)
This image contains the problem:
$8 t y y' - 5 y^2 = 7 t^3, \quad y(1) = 1$
This is the exact same problem as **Image Task 3**. See Image Task 3 for the complete solution.

### Image Task 36 (from `задачи диффуры 31.png`)
**Problem:**
Задача 10.
Рассмотрим систему с постоянной матрицей $A$: $\frac{dx}{dt} = Ax$.
Известно, что каждая компонента каждого решения есть полином. Доказать, что тем же свойством (=каждая компонента каждого решения есть полином) обладает система уравнений
$$\frac{dx}{dt} = A^k x(t).$$

**Solution:**
Общее решение системы $\frac{dx}{dt} = Ax$ записывается через матричную экспоненту: $x(t) = e^{tA} x_0$, где $x_0$ — начальный вектор.
По условию, каждая компонента любого решения $x(t)$ является полиномом от $t$.
В общем случае элементы фундаментальной матрицы $e^{tA}$ состоят из линейных комбинаций функций вида $t^j e^{\lambda t}$, где $\lambda$ — собственные значения матрицы $A$.
Для того чтобы эти функции были полиномами, необходимо, чтобы все собственные значения $\lambda$ равнялись нулю.
Матрица, все собственные значения которой равны нулю, является нильпотентной. Следовательно, существует такое натуральное число $m$, что $A^m = 0$ (нулевая матрица).
В этом случае ряд Тейлора для матричной экспоненты обрывается:
$e^{tA} = I + tA + \frac{t^2}{2!}A^2 + \dots + \frac{t^{m-1}}{(m-1)!}A^{m-1}$, что и дает полиномы.

Рассмотрим теперь новую систему уравнений: $\frac{dx}{dt} = A^k x(t)$, где $k$ — натуральное число.
Матрица этой системы — $A^k$.
Так как $A$ нильпотентна ($A^m = 0$), то матрица $A^k$ также является нильпотентной:
$(A^k)^m = A^{km} = 0$, так как $km \ge m$.
Следовательно, матричная экспонента $e^{t A^k}$ также является конечной суммой (рядом, который обрывается не позже чем на $m$-м члене):
$e^{t A^k} = I + t A^k + \frac{t^2}{2!} (A^k)^2 + \dots + \frac{t^{m-1}}{(m-1)!} (A^k)^{m-1}$.
Таким образом, все элементы матрицы $e^{t A^k}$ являются полиномами от $t$.
Поскольку любое решение новой системы имеет вид $x(t) = e^{t A^k} x_0$, каждая его компонента представляет собой линейную комбинацию полиномов, а значит, сама является полиномом.
Что и требовалось доказать.

**Problem:**
Задача 26.
Известны два частных решения линейного однородного 3-го порядка
$y_1(x) = x^2 - 2x + 3, \quad y_2(x) = x e^x + 2$. Достаточно ли этого, чтобы найти решение с начальными данными:
$y(0) = 5, y'(0) = -8, y''(0) = 2$? Почему?

**Solution:**
Так как рассматриваемое дифференциальное уравнение является линейным и однородным, любая линейная комбинация его частных решений также является решением этого уравнения.
Будем искать решение удовлетворяющее задаче Коши в виде линейной комбинации известных нам решений:
$y(x) = C_1 y_1(x) + C_2 y_2(x)$.
Вычислим значения функций и их производных в нуле:
$y_1(x) = x^2 - 2x + 3 \implies y_1(0) = 3$
$y_1'(x) = 2x - 2 \implies y_1'(0) = -2$
$y_1''(x) = 2 \implies y_1''(0) = 2$

$y_2(x) = x e^x + 2 \implies y_2(0) = 2$
$y_2'(x) = e^x + x e^x \implies y_2'(0) = 1$
$y_2''(x) = 2e^x + x e^x \implies y_2''(0) = 2$

Подставим это в начальные условия:
1) $y(0) = C_1 \cdot 3 + C_2 \cdot 2 = 5$
2) $y'(0) = C_1 \cdot (-2) + C_2 \cdot 1 = -8$
3) $y''(0) = C_1 \cdot 2 + C_2 \cdot 2 = 2$

Решим систему из первых двух уравнений:
Из второго уравнения: $C_2 = 2C_1 - 8$.
Подставим в первое: $3C_1 + 2(2C_1 - 8) = 5 \implies 3C_1 + 4C_1 - 16 = 5 \implies 7C_1 = 21 \implies C_1 = 3$.
Тогда $C_2 = 2 \cdot 3 - 8 = -2$.

Проверим, удовлетворяют ли найденные константы третьему уравнению:
$2C_1 + 2C_2 = 2(3) + 2(-2) = 6 - 4 = 2$.
Мы видим, что третье уравнение (условие на вторую производную) **выполняется тождественно**.
Значит, функция $y(x) = 3y_1(x) - 2y_2(x) = 3(x^2 - 2x + 3) - 2(xe^x + 2) = 3x^2 - 6x - 2xe^x + 5$ удовлетворяет исходному уравнению (как линейная комбинация его решений) и всем трем начальным условиям.

По теореме существования и единственности решения задачи Коши для линейного дифференциального уравнения, найденное нами решение является единственным.
Третье линейно независимое решение (необходимое для построения ФСР) для ответа на этот конкретный вопрос не потребовалось, так как начальные условия оказались линейно зависимыми "в нужной пропорции".

**Answer:** Да, достаточно. Искомое решение: $y(x) = 3(x^2 - 2x + 3) - 2(xe^x + 2)$, так как эта линейная комбинация удовлетворяет всем трем начальным условиям.

**Problem:**
Задача 22.
Дано уравнение $\frac{d^2 y}{dx^2} + p(x) y(x) = 0$. Известно, что $p(x)$ — непрерывная периодическая функция с периодом $\omega$. Пусть $y_1(x)$ — решение этого уравнения с начальными данными $y_1(0) = a, y_1'(0) = b$. Доказать, что $y_2(x)$ — решение этого уравнения с начальными данными $y_2(m\omega) = a, y_2'(m\omega) = b, \quad m$ — целое, удовлетворяет тождеству
$$y_2(x + m\omega) \equiv y_1(x).$$

**Solution:**
Введем новую функцию $z(x) = y_2(x + m\omega)$.
Докажем, что $z(x)$ является решением той же самой задачи Коши, что и функция $y_1(x)$.

1) Проверим, удовлетворяет ли $z(x)$ дифференциальному уравнению.
Найдем производные:
$z'(x) = y_2'(x + m\omega)$
$z''(x) = y_2''(x + m\omega)$.
Подставим $z(x)$ в левую часть исходного уравнения:
$z''(x) + p(x) z(x) = y_2''(x + m\omega) + p(x) y_2(x + m\omega)$.
Так как $p(x)$ — периодическая функция с периодом $\omega$, то для любого целого $m$ справедливо равенство $p(x) = p(x + m\omega)$. Заменим $p(x)$ в выражении:
$z''(x) + p(x) z(x) = y_2''(x + m\omega) + p(x + m\omega) y_2(x + m\omega)$.
Поскольку $y_2(t)$ является решением исходного уравнения $\frac{d^2 y_2(t)}{dt^2} + p(t) y_2(t) = 0$ при любом $t$, то подставив $t = x + m\omega$, мы получим, что правая часть тождественно равна нулю.
Следовательно, $z''(x) + p(x) z(x) = 0$, то есть $z(x)$ — решение того же дифференциального уравнения.

2) Проверим начальные условия для функции $z(x)$ при $x = 0$:
$z(0) = y_2(0 + m\omega) = y_2(m\omega)$.
По условию задачи, $y_2(m\omega) = a$, поэтому $z(0) = a$.
$z'(0) = y_2'(0 + m\omega) = y_2'(m\omega)$.
По условию задачи, $y_2'(m\omega) = b$, поэтому $z'(0) = b$.

Итак, функция $z(x)$ удовлетворяет задаче Коши:
$z'' + p(x) z = 0, \quad z(0) = a, z'(0) = b$.
Этой же задаче Коши по определению удовлетворяет функция $y_1(x)$.
Так как коэффициенты уравнения непрерывны, по теореме существования и единственности решение задачи Коши единственно.
Следовательно, функции $z(x)$ и $y_1(x)$ тождественно равны:
$z(x) \equiv y_1(x)$,
что означает
$y_2(x + m\omega) \equiv y_1(x)$.
Ч.т.д.

### Image Task 25 (from `задачи диффуры 20.png`)
This image contains two problems:
**Задача 17**: Вычислить матричную экспоненту $e^{tA}$, если $A$ обладает свойством $A^2 = -I$.
This is identical to **Task 5**. See Task 5 for the solution.

**Задача 18**: Найти производную $\frac{\partial y}{\partial \mu}\big|_{\mu=0}$, где $y(x, \mu)$ - решение задачи $y' = 2x + \mu y^2, y(0) = \mu - 1$.
This is identical to **Image Task 8**. See Image Task 8 for the solution.

**Problem:**
Задача 15.
Докажите, что все решения линейной системы
$$\frac{dy}{dx} = A(x)y + F(x),$$
компоненты $A(x), F(x)$ являются непрерывными функциями, устойчивы или неустойчивы одновременно.

**Solution:**
Пусть $y_1(x)$ и $y_2(x)$ — два произвольных решения данной неоднородной системы. Нам нужно доказать, что $y_1(x)$ устойчиво по Ляпунову тогда и только тогда, когда устойчиво $y_2(x)$.

По определению, решение $y_1(x)$ устойчиво, если для любого $\varepsilon > 0$ существует $\delta > 0$ такое, что для любого другого решения $\tilde{y}(x)$ этой же системы, удовлетворяющего условию $\|y_1(x_0) - \tilde{y}(x_0)\| < \delta$, выполняется неравенство $\|y_1(x) - \tilde{y}(x)\| < \varepsilon$ для всех $x \ge x_0$.

Рассмотрим разность двух решений неоднородной системы $z(x) = y_1(x) - \tilde{y}(x)$. Продифференцируем ее:
$\frac{dz}{dx} = \frac{dy_1}{dx} - \frac{d\tilde{y}}{dx} = (A(x)y_1(x) + F(x)) - (A(x)\tilde{y}(x) + F(x)) = A(x)(y_1(x) - \tilde{y}(x)) = A(x)z(x)$.
Таким образом, разность любых двух решений неоднородной системы является решением соответствующей **однородной** системы:
$\frac{dz}{dx} = A(x)z$.

Тогда условие устойчивости решения $y_1(x)$ можно переформулировать так: для любого $\varepsilon > 0$ существует $\delta > 0$ такое, что для любого решения $z(x)$ однородной системы, если $\|z(x_0)\| < \delta$, то $\|z(x)\| < \varepsilon$ для всех $x \ge x_0$.
Но это в точности совпадает с определением устойчивости **нулевого решения** $z(x) \equiv 0$ однородной системы $\frac{dz}{dx} = A(x)z$.

Следовательно, устойчивость любого частного решения $y_1(x)$ неоднородной системы эквивалентна устойчивости тривиального (нулевого) решения соответствующей однородной системы.
Поскольку это условие не зависит от самого решения $y_1(x)$ (оно определяется исключительно матрицей $A(x)$), то если однородная система устойчива, то устойчивы **все** решения неоднородной системы. Если же нулевое решение однородной системы неустойчиво, то **все** решения неоднородной системы также неустойчивы.
Это и доказывает, что все решения линейной системы устойчивы или неустойчивы одновременно.
Ч.т.д.

### Image Task 41 (Re-extracted from `Дифуры 2025 задачи 4.png`)
**Problem:**
Найти собственные значения и собственные функции краевой задачи:
$$t^2 y'' + 5 t y' + 4 y = \lambda y$$
$$y(1) = 0$$
$$3 y'(3) + 2 y(3) = 0$$

**Solution:**
Rewrite the equation as an Euler equation: $t^2 y'' + 5 t y' + (4 - \lambda) y = 0$.
Use the substitution $t = e^s$, converting it to an equation with constant coefficients:
$y_{ss} + 4 y_s + (4 - \lambda) y = 0$.
Characteristic equation: $k^2 + 4k + (4 - \lambda) = 0 \implies (k+2)^2 = \lambda$.

Case $\lambda < 0$: Let $\lambda = -\mu^2$ where $\mu > 0$. The roots are $k = -2 \pm i\mu$.
The general solution is $y(t) = t^{-2} \left( C_1 \cos(\mu \ln t) + C_2 \sin(\mu \ln t) \right)$.
Left boundary condition $y(1) = 0 \implies C_1 = 0$.
$y(t) = C_2 t^{-2} \sin(\mu \ln t)$.
$y'(t) = C_2 \left[ -2 t^{-3} \sin(\mu \ln t) + \mu t^{-3} \cos(\mu \ln t) \right]$.
Substitute into $3 y'(3) + 2 y(3) = 0$:
$3 C_2 \left[ -2 \cdot 3^{-3} \sin(\mu \ln 3) + \mu \cdot 3^{-3} \cos(\mu \ln 3) \right] + 2 C_2 \cdot 3^{-2} \sin(\mu \ln 3) = 0$.
Dividing by $C_2 3^{-2}$ gives $\mu \cos(\mu \ln 3) = 0$.
Since $\mu \neq 0$, $\cos(\mu \ln 3) = 0 \implies \mu \ln 3 = \frac{\pi}{2} + \pi n$, for $n = 0, 1, 2, \dots$
$\mu_n = \frac{\pi(2n+1)}{2 \ln 3}$.

**Answer:**
Eigenvalues: $\lambda_n = -\left( \frac{\pi(2n+1)}{2 \ln 3} \right)^2, \quad n \in \mathbb{Z}_{\ge 0}$.
Eigenfunctions: $y_n(t) = t^{-2} \sin\left( \frac{\pi(2n+1)}{2 \ln 3} \ln t \right)$.
