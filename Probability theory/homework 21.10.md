# Домашнее задание по теории вероятностей (Задачи 9.13–9.18)

---

## Задача 9.13

### Условие

Плотность распределения непрерывной случайной величины $\xi$ задана формулой:


$$p(x) = \frac{c}{1 + (x - \alpha)^2}, \quad \alpha \in \mathbb{R}$$

Найти постоянный параметр $c$.

---

### Решение

1. **Свойство неотрицательности плотности:**
Так как $1 + (x - \alpha)^2 > 0$ при всех $x \in \mathbb{R}$, условие $p(x) \ge 0$ выполняется тогда и только тогда, когда $c > 0$.
2. **Условие нормировки:**
Интеграл от плотности по всей числовой прямой должен быть равен единице:

$$\int_{-\infty}^{+\infty} p(x) \, dx = 1$$


Подставим выражение для $p(x)$:

$$c \int_{-\infty}^{+\infty} \frac{dx}{1 + (x - \alpha)^2} = 1$$


Сделаем замену переменной $u = x - \alpha, \, du = dx$:

$$\int_{-\infty}^{+\infty} \frac{du}{1 + u^2} = \left. \operatorname{arctg} u \right\vert{}_{-\infty}^{+\infty} = \frac{\pi}{2} - \left( -\frac{\pi}{2} \right) = \pi$$


Следовательно:

$$c \cdot \pi = 1 \implies c = \frac{1}{\pi}$$



> **Замечание к рукописи:** В черновике была допущена ошибка в вычислении предела интеграла (записано $\pi - (-\pi) = 2\pi$, из-за чего получился ошибочный коэффициент $c = \frac{1}{2\pi}$). Правильный ответ: $c = \frac{1}{\pi}$ (плотность стандартного распределения Коши).

### Ответ

$$c = \frac{1}{\pi}$$

---

## Задача 9.14

### Условие

Найти постоянную $c$, если плотность вероятности случайной величины равна:


$$p(x) = \begin{cases}  c x^{\beta} e^{-\alpha x}, & x > 0 \\  0, & x \le 0  \end{cases}$$


где $\alpha > 0$, $\beta > -1$.

---

### Решение

1. **Условие нормировки:**

$$\int_{-\infty}^{+\infty} p(x) \, dx = 1 \implies c \int_{0}^{+\infty} x^{\beta} e^{-\alpha x} \, dx = 1$$


2. **Вычисление интеграла с помощью Гамма-функции:**
Сделаем замену $t = \alpha x \implies x = \frac{t}{\alpha}, \, dx = \frac{dt}{\alpha}$:

$$\int_{0}^{+\infty} x^{\beta} e^{-\alpha x} \, dx = \int_{0}^{+\infty} \left( \frac{t}{\alpha} \right)^{\beta} e^{-t} \frac{dt}{\alpha} = \frac{1}{\alpha^{\beta + 1}} \int_{0}^{+\infty} t^{\beta} e^{-t} \, dt$$


По определению Гамма-функции Эйлера:

$$\Gamma(z) = \int_{0}^{+\infty} t^{z-1} e^{-t} \, dt \implies \int_{0}^{+\infty} t^{\beta} e^{-t} \, dt = \Gamma(\beta + 1)$$


Получаем:

$$c \cdot \frac{\Gamma(\beta + 1)}{\alpha^{\beta + 1}} = 1 \implies c = \frac{\alpha^{\beta + 1}}{\Gamma(\beta + 1)}$$



> **Замечание к рукописи:** В конспекте неразборчиво указана замена переменной ($x = \frac{t}{2}$ вместо $x = \frac{t}{\alpha}$) и присутствовали опечатки в степенях.

### Ответ

$$c = \frac{\alpha^{\beta + 1}}{\Gamma(\beta + 1)}$$

---

## Задача 9.15

### Условие

Найти нормировочную константу $c$ для функции плотности вида:


$$p(x) = \frac{c}{e^{-x} + e^{x}} = \frac{c}{2 \operatorname{ch} x}, \quad x \in \mathbb{R}$$

---

### Решение

1. **Условие нормировки:**

$$\int_{-\infty}^{+\infty} \frac{c}{e^x + e^{-x}} \, dx = 1$$


2. **Вычисление интеграла:**
Умножим числитель и знаменатель на $e^x$:

$$I = \int_{-\infty}^{+\infty} \frac{e^x \, dx}{e^{2x} + 1}$$



Полагая $u = e^x$, $du = e^x dx$:

$$I = \int_{0}^{+\infty} \frac{du}{u^2 + 1} = \left. \operatorname{arctg} u \right\vert{}_{0}^{+\infty} = \frac{\pi}{2} - 0 = \frac{\pi}{2}$$


3. **Нахождение $c$:**

$$c \cdot \frac{\pi}{2} = 1 \implies c = \frac{2}{\pi}$$



> **Замечание к рукописи:** В черновике ошибочно посчитан интеграл от гиперболического секанса (получено $2\pi$ вместо $\frac{\pi}{2}$), из-за чего ошибочно было получено $c = \frac{1}{2\pi}$.

### Ответ

$$c = \frac{2}{\pi}$$

---

## Задача 9.17

### Условие

Пусть случайная величина $\xi$ распределена равномерно на отрезке $[0, 1]$ ($\xi \sim \mathcal{U}[0, 1]$).
Найти плотности распределения следующих случайных величин:

* **а)** $-\ln \xi$
* **б)** $2\xi + 1$
* **в)** $\xi - 1/\xi$
* **г)** $-\ln(1-\xi)$
* **д)** $\xi^2$
* **е)** $e^{\xi - 1}$

---

### Исходные функции для $\xi \sim \mathcal{U}[0, 1]$:

$$F_\xi(x) = \begin{cases}  0, & x < 0 \\  x, & x \in [0, 1] \\  1, & x > 1  \end{cases}, \qquad  f_\xi(x) = \begin{cases}  1, & x \in [0, 1] \\  0, & x \notin [0, 1]  \end{cases}$$

---

### Решение по пунктам:

#### **а) $\eta = -\ln \xi$**

* Область значений $\eta \in [0, +\infty)$.
* Для $t > 0$:

$$F_\eta(t) = P(-\ln \xi \le t) = P(\ln \xi \ge -t) = P(\xi \ge e^{-t}) = 1 - F_\xi(e^{-t}) = 1 - e^{-t}$$


* Плотность:

$$f_\eta(t) = \begin{cases}    e^{-t}, & t > 0 \\    0, & t \le 0    \end{cases} \quad (\operatorname{Exp}(1))$$



---

#### **б) $\eta = 2\xi + 1$**

* Область значений $\eta \in [1, 3]$.
* Для $t \in [1, 3]$:

$$F_\eta(t) = P(2\xi + 1 \le t) = P\left(\xi \le \frac{t-1}{2}\right) = F_\xi\left(\frac{t-1}{2}\right) = \frac{t-1}{2}$$


* Плотность:

$$f_\eta(t) = \begin{cases}    \frac{1}{2}, & t \in [1, 3] \\    0, & t \notin [1, 3]    \end{cases} \quad (\mathcal{U}[1, 3])$$



---

#### **в) $\eta = \xi - \frac{1}{\xi}$**

* Функция $g(x) = x - \frac{1}{x}$ монотонно возрастает на $(0, 1]$ от $-\infty$ до $0$. Значит, $\eta \in (-\infty, 0]$.
* Для $t \le 0$ решим неравенство $\xi - \frac{1}{\xi} \le t \iff \xi^2 - t\xi - 1 \le 0$:
Положительный корень: $\xi = \frac{t + \sqrt{t^2 + 4}}{2}$.

$$F_\eta(t) = P\left(\xi \le \frac{t + \sqrt{t^2 + 4}}{2}\right) = \frac{t + \sqrt{t^2 + 4}}{2}$$


* Плотность:

$$f_\eta(t) = \begin{cases}    \frac{1}{2} \left( 1 + \frac{t}{\sqrt{t^2 + 4}} \right), & t \le 0 \\    0, & t > 0    \end{cases}$$



---

#### **г) $\eta = -\ln(1 - \xi)$**

* Область значений $\eta \in [0, +\infty)$.
* Для $t > 0$:

$$F_\eta(t) = P(-\ln(1 - \xi) \le t) = P(1 - \xi \ge e^{-t}) = P(\xi \le 1 - e^{-t}) = 1 - e^{-t}$$


* Плотность:

$$f_\eta(t) = \begin{cases}    e^{-t}, & t > 0 \\    0, & t \le 0    \end{cases} \quad (\operatorname{Exp}(1))$$



---

#### **д) $\eta = \xi^2$**

* Область значений $\eta \in [0, 1]$.
* Для $t \in (0, 1]$:

$$F_\eta(t) = P(\xi^2 \le t) = P(\xi \le \sqrt{t}) = \sqrt{t}$$


* Плотность:

$$f_\eta(t) = \begin{cases}    \frac{1}{2\sqrt{t}}, & t \in (0, 1] \\    0, & t \notin (0, 1]    \end{cases}$$



---

#### **е) $\eta = e^{\xi - 1}$**

* Область значений $\eta \in [e^{-1}, 1]$.
* Для $t \in [e^{-1}, 1]$:

$$F_\eta(t) = P(e^{\xi - 1} \le t) = P(\xi - 1 \le \ln t) = P(\xi \le 1 + \ln t) = 1 + \ln t$$


* Плотность:

$$f_\eta(t) = \begin{cases}    \frac{1}{t}, & t \in [e^{-1}, 1] \\    0, & t \notin [e^{-1}, 1]    \end{cases}$$



---

## Задача 9.18

### Условие

Пусть случайная величина $\xi$ имеет показательное (экспоненциальное) распределение с параметром $\alpha > 0$ ($\xi \sim \operatorname{Exp}(\alpha)$).
Найти плотности распределения следующих случайных величин:

* **а)** $\sqrt{\xi}$
* **б)** $\xi^2$
* **в)** $2\xi$
* **г)** $\ln(\alpha\xi)$
* **д)** $e^{-\alpha\xi}$
* **е)** $\min(\xi, \xi^2)$

---

### Исходные функции для $\xi \sim \operatorname{Exp}(\alpha)$:

$$F_\xi(x) = \begin{cases}  1 - e^{-\alpha x}, & x \ge 0 \\  0, & x < 0  \end{cases}, \qquad  f_\xi(x) = \begin{cases}  \alpha e^{-\alpha x}, & x > 0 \\  0, & x \le 0  \end{cases}$$

---

### Решение по пунктам:

#### **а) $\eta = \sqrt{\xi}$**

* Область значений $\eta \in [0, +\infty)$.
* Для $t > 0$:

$$F_\eta(t) = P(\sqrt{\xi} \le t) = P(\xi \le t^2) = 1 - e^{-\alpha t^2}$$


* Плотность:

$$f_\eta(t) = \begin{cases}    2\alpha t e^{-\alpha t^2}, & t > 0 \\    0, & t \le 0    \end{cases} \quad (\text{Распределение Рэлея})$$



---

#### **б) $\eta = \xi^2$**

* Область значений $\eta \in [0, +\infty)$.
* Для $t > 0$:

$$F_\eta(t) = P(\xi^2 \le t) = P(\xi \le \sqrt{t}) = 1 - e^{-\alpha \sqrt{t}}$$


* Плотность:

$$f_\eta(t) = \begin{cases}    \frac{\alpha}{2\sqrt{t}} e^{-\alpha \sqrt{t}}, & t > 0 \\    0, & t \le 0    \end{cases}$$



---

#### **в) $\eta = 2\xi$**

* Область значений $\eta \in [0, +\infty)$.
* Для $t > 0$:

$$F_\eta(t) = P(2\xi \le t) = P\left(\xi \le \frac{t}{2}\right) = 1 - e^{-\frac{\alpha t}{2}}$$


* Плотность:

$$f_\eta(t) = \begin{cases}    \frac{\alpha}{2} e^{-\frac{\alpha t}{2}}, & t > 0 \\    0, & t \le 0    \end{cases} \quad \left(\operatorname{Exp}\left(\frac{\alpha}{2}\right)\right)$$



---

#### **г) $\eta = \ln(\alpha\xi)$**

* Область значений $\eta \in (-\infty, +\infty)$.
* Для $t \in \mathbb{R}$:

$$F_\eta(t) = P(\ln(\alpha\xi) \le t) = P\left(\xi \le \frac{e^t}{\alpha}\right) = 1 - e^{-\alpha \cdot \frac{e^t}{\alpha}} = 1 - e^{-e^t}$$


* Плотность:

$$f_\eta(t) = e^{t - e^t}, \quad t \in \mathbb{R} \quad (\text{Стандартное распределение Гумбеля})$$



---

#### **д) $\eta = e^{-\alpha\xi}$**

* Так как $\xi > 0$, значение $\eta \in (0, 1)$.
* Для $t \in (0, 1)$:

$$F_\eta(t) = P(e^{-\alpha\xi} \le t) = P(-\alpha\xi \le \ln t) = P\left(\xi \ge -\frac{\ln t}{\alpha}\right) = 1 - F_\xi\left(-\frac{\ln t}{\alpha}\right)$$


$$F_\eta(t) = 1 - \left(1 - e^{-\alpha \left(-\frac{\ln t}{\alpha}\right)}\right) = e^{\ln t} = t$$


* Плотность:

$$f_\eta(t) = \begin{cases}    1, & t \in (0, 1) \\    0, & t \notin (0, 1)    \end{cases} \quad (\mathcal{U}[0, 1])$$



---

#### **е) $\eta = \min(\xi, \xi^2)$**

* Заметим, что:

$$\min(x, x^2) = \begin{cases}    x^2, & 0 < x < 1 \\    x, & x \ge 1    \end{cases}$$


* Функция $g(x) = \min(x, x^2)$ строго монотонно возрастает на $[0, +\infty)$.
* Для $t \in (0, 1)$: $F_\eta(t) = P(\xi^2 \le t) = P(\xi \le \sqrt{t}) = 1 - e^{-\alpha \sqrt{t}}$.
* Для $t \ge 1$: $F_\eta(t) = P(\xi \le t) = 1 - e^{-\alpha t}$.
* Плотность:

$$f_\eta(t) = \begin{cases}    0, & t \le 0 \\    \frac{\alpha}{2\sqrt{t}} e^{-\alpha \sqrt{t}}, & t \in (0, 1) \\    \alpha e^{-\alpha t}, & t \ge 1    \end{cases}$$