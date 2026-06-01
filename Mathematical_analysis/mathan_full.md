# Lecture Transcription

Generated on 2026-05-29 14:46:57

## Page: page_1.png

# 05.02.24
## § Интегралы, зависящие от параметров (ИЗоП)
### Постановка задачи
Пусть $(X, \mathfrak{M}, \mu)$ – пр-во с $\sigma$-конечной мерой, $A \in \mathfrak{M}$. $Y \subset \mathbb{R}^n$ – мн-во параметров, $f \in \mathcal{L}(A, \mu)$, $f = f(x, y)$, $x \in A$, $y \in Y$.

т.е. $F(y) = \int_A f(x, y) d\mu(x)$, $F: Y \to \mathbb{R}$ – инт. завис. от параметров $y \in Y$.

При каких условиях $F \in C(Y)$, $C^{(k)}(Y)$ или $\mathcal{L}(Y, dy)$?

### Теорема (о непрерывности ИЗоП)
Пусть дан интеграл $F(y)$. Если $\exists$ окр. $U(y_0)$, м.ч.
- 1) $\forall$ п.в. $x \in A$ $f(x, y)$ будет непрер. по $y$ в т. $y_0$, т.е. $f(x, y) \underset{y \to y_0}{\longrightarrow} f(x, y_0)$ п.в. на $A$
- 2) $\exists g \in \mathcal{L}(A, \mu): \forall$ п.в. $x \in A$ $\forall y \in U(y_0)$ $|f(x, y)| \le g(x)$

Тогда $F$ непрер. в т. $y_0$, т.е. $F(y) \underset{y \to y_0}{\longrightarrow} F(y_0)$.

### Доказательство
$$\lim_{y \to y_0} F(y) = F(y_0) \Leftrightarrow \forall y_n \to y_0 \lim_{n \to \infty} F(y_n) = F(y_0)$$
$$\lim_{n \to \infty} \int_A f(x, y_n) d\mu(x) \overset{(1)}{=} \int_A \lim_{n \to \infty} f(x, y_n) d\mu(x) \overset{(2)}{=} \int_A f(x, y_0) d\mu(x) = F(y_0)$$
↑ м. Лебега о
мажор-сх-мии по (2)
м.к. $\forall$ п.в. $x \in A$ $\forall y_n \in U(y_0)$ $|f(x, y_0)| \le g(x)$ $\& \int_A g d\mu < \infty$

Ч.т.д.

### Теорема (о диф-нии ИЗоП)
Пусть $\exists$ окр. $U(y_0)$, м.ч.
- 1) $\exists \frac{\partial f}{\partial y_j}(x, y)$ $\forall$ почти всех $x \in A$ и $\forall y \in U(y_0)$
- 2) $\exists g: \int_A g(x) d\mu(x) < \infty$ и $|\frac{\partial f}{\partial y_j}(x, y)| \le g(x)$ и др. $\forall$ п.в. $x \in A$ и $\forall y \in U(y_0)$.

Тогда $\forall y \in U(y_0)$ будет опр. $\frac{\partial F}{\partial y_j}(y) = \int_A \frac{\partial f}{\partial y_j}(x, y) d\mu(x)$.


---

## Page: page_10.png

# Лекция (12.02.24)
$$ \frac{d^\alpha}{dx^\alpha} := I_\alpha^{-1} - \text{производная дробного порядка} $$
$$ \Big\downarrow^{\Delta(\alpha)} $$

## § Пример вычисления интеграла диф-ем по параметру: (Метод Фейнмана)
$$ \int_0^1 \frac{x^{2024} - x}{\ln x} dx $$
Введем параметр $a > 0$ и рассм. $I(a) = \int_0^1 \frac{x^a - x}{\ln x} dx$,
$$ \frac{d}{da} I(a) = \int_0^1 \frac{\partial}{\partial a} \left( \frac{x^a - x}{\ln x} \right) dx = \int_0^1 \frac{\ln x \cdot x^a}{\ln x} dx = \int_0^1 x^a dx = \frac{x^{a+1}}{a+1} \Big|_0^1 = \frac{1}{a+1} $$
$$ \Rightarrow I(a) = \int \frac{da}{a+1} + C, \quad I(a) = \ln(a+1) + C $$
$$ I(1) = 0 \Rightarrow I(1) = \ln(2) + C = 0 \Rightarrow C = -\ln(2) $$
$$ \Rightarrow \forall a>0 \quad I(a) = \ln \left( \frac{a+1}{2} \right) $$
$$ a = 2024 \quad I(2024) = \ln \left( \frac{2025}{2} \right) $$
(если нет параметра, можно его ввести)

Для приме. т. о диф. ИЗоП надо
$$ \left| \frac{\partial}{\partial a} \left( \frac{x^a - x}{\ln x} \right) \right| = |x^a| \le x^{a_0 - \varepsilon} $$
$$ \overset{-(+)--}{a_0 - \varepsilon \quad a_0 \quad a_0 + \varepsilon} \quad \int_0^1 x^{a_0 - \varepsilon} dx < \infty $$
$$ \text{усл. вып.} \surd $$

## § Одномерные несобственные интегралы Римана, зависящие от параметра. (нИЗоП)
### Опр.
Пусть $f = f(x, y)$, $x \in [a, \omega)$, $y \in Y$. Будем считать, что $\forall y \in Y$ опред. несобств. интег. Римана $\int_a^\omega f(x, y) dx$, т.е. $\omega$ - особая точка и $\int_a^\omega f(x, y) dx = \lim_{b \to \omega - 0} \int_a^b f(x, y) dx$
### Опр.
Интеграл $\int_a^\omega f(x, y) dx$ *сходится равномерно на $Y$*, если
$$ \forall \varepsilon > 0 \quad \exists \Delta \varepsilon (\alpha, \omega): \forall b \in (\Delta, \omega) \quad \forall y \in Y \quad \left| \int_b^\omega f(x, y) dx \right| < \varepsilon. $$
Другими словами, $F(y) = \int_a^\omega f(x, y) dx \overset{Y}{\underset{b \to \omega - 0}{\rightleftharpoons}} \int_a^b f(x, y) dx $
### Критерий Коши
Интеграл $\int_a^\omega f(x, y) dx$ сх. равно-но на $Y$
$$ \forall \varepsilon > 0 \quad \exists \Delta \varepsilon (\alpha, \omega): \forall b_1, b_2 \in (\Delta, \omega) \quad \forall y \in Y \quad \left| \int_{b_1}^{b_2} f(x, y) dx \right| < \varepsilon. $$

---

## Page: page_100.png

# Заголовок лекции
## §

$G$ по сфере Г.О.
$$\iiint_{B(x, \varepsilon)} \text{div} \vec{F} dV = \iint_{S(x, \varepsilon)} (\vec{F}, \vec{n}) dS$$
$S(x, \varepsilon) = \partial B(x, \varepsilon)$
т.к. $\text{div} \vec{F} \in C(B(x, \varepsilon))$, то по т. о среднем
$$\text{div} \vec{F}(\xi_\varepsilon) \cdot \underbrace{\iiint_{B(x, \varepsilon)} dV}_{V_{B(x, \varepsilon)} - \text{объем}} = \iint_{S(x, \varepsilon)} (\vec{F}, \vec{n}) dS$$
$\xi_\varepsilon \in B(x, \varepsilon)$

$$\text{div} \vec{F}(x) = \lim_{\varepsilon \to 0^+} \text{div} \vec{F}(\xi_\varepsilon) = \lim_{\varepsilon \to 0^+} \frac{\iint_{S(x, \varepsilon)} (\vec{F}, \vec{n}) dS}{V(B(x, \varepsilon))}$$

м.о. $\forall x \in G$
$$\text{div} \vec{F}(x) = \lim_{\varepsilon \to 0^+} \frac{1}{V(B(x, \varepsilon))} \iint_{S(x, \varepsilon)} (\vec{F}, \vec{n}) dS$$

### Свойства гармонич-х функций

Пусть $G \subset \mathbb{R}^n$ - обл. и $\varphi$ - *гармонич*. в $G$, т.е. $\varphi \in C^2(G)$ и $\Delta \varphi(x, y, z) = 0$ в $G$
Тогда
$\forall x \in G$
$$\varphi(x) = \frac{1}{S} \iint_{S(x, r)} \varphi(y) dS(y), \text{где } S(x, r) \text{- сфера с центром x и радиуса r.}$$
$S(x, r) \subset G$

(верно и в обратную сторону, но мы это не будем док-ть)

### До-во:

1.  Пусть $u, v \in C^2(G)$. Тогда $\text{div}(u \cdot \nabla v) = (\nabla, u \nabla v) = (\nabla u, \nabla v) + u \cdot \Delta v = (\nabla u, \nabla v) + u \Delta v$

Пусть $\tilde{G} \subset G$
обл.
$$\iiint_{\tilde{G}} \text{div} (u \nabla v) dV = \iint_{\partial \tilde{G}} (u \nabla v, \vec{n}) dS = \iint_{\partial \tilde{G}} u \frac{\partial v}{\partial n} dS, \frac{\partial v}{\partial n} = (\nabla v, \vec{n})$$
$$\iiint_{\tilde{G}} (\nabla u, \nabla v) dV + \iiint_{\tilde{G}} u \Delta v dV$$

$$ \iint_{\partial \tilde{G}} u \frac{\partial v}{\partial n} dS = \iiint_{\tilde{G}} (\nabla u, \nabla v) dV + \iiint_{\tilde{G}} u \Delta v dV$$

$$-\iint_{\partial \tilde{G}} v \frac{\partial u}{\partial n} dS = \iiint_{\tilde{G}} (\nabla v, \nabla u) dV + \iiint_{\tilde{G}} v \Delta u dV$$

$$ \iint_{\partial \tilde{G}} \begin{vmatrix} u & v \\ \frac{\partial u}{\partial n} & \frac{\partial v}{\partial n} \end{vmatrix} dS = \iiint_{\tilde{G}} \begin{vmatrix} u & v \\ \Delta u & \Delta v \end{vmatrix} dV \qquad (*)$$
```

---

## Page: page_101.png

#  
## §

2. Применим (*) для ф-ий $u(y) = \varphi(y)$, $v(y) = \frac{1}{|x-y|}$, $x \in G$ – фикс. точка
$\tilde{G} = G \setminus B(x, \varepsilon)$

Знаем, что $\Delta u = 0$ в $\tilde{G}$
$\Delta v = 0$ в $\tilde{G}$ (упр.)

$$
\iint\limits_{\partial \tilde{G}} \left( \varphi(y) \frac{\partial}{\partial n} \left(\frac{1}{|x-y|} \right) - \frac{\partial \varphi}{\partial n}(y) \frac{1}{|x-y|} \right) dS = 0
$$
$\partial \tilde{G} = \partial G \coprod S(x, \varepsilon)$
поменяли ориентацию
$$
\iint\limits_{\partial G} \left( \varphi(y) \frac{\partial}{\partial n} \left(\frac{1}{|x-y|} \right) - \frac{\partial \varphi}{\partial n}(y) \frac{1}{|x-y|} \right) dS - \iint\limits_{S(x, \varepsilon)} \left( \varphi(y) \frac{\partial}{\partial n} \left(\frac{1}{|x-y|} \right) - \frac{\partial \varphi}{\partial n}(y) \frac{1}{|x-y|} \right) dS
$$
на $S(x, \varepsilon)$:
$$
\frac{\partial}{\partial n} \left(\frac{1}{|x-y|} \right) = \left( \nabla_y \frac{1}{|x-y|}, \frac{y-x}{|y-x|} \right) = \left( \frac{x-y}{|x-y|^3}, \frac{y-x}{|y-x|} \right) = - \frac{|x-y|^2}{|x-y|^4} = - \frac{1}{|x-y|^2}
$$
$$
\vec{n} = \frac{y-x}{|y-x|}
$$
$$
\frac{\partial}{\partial y_1} \left( \frac{1}{\sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2 + (x_3 - y_3)^2}} \right) = -\frac{1}{2} \left( (x_1 - y_1)^2 + (x_2 - y_2)^2 + (x_3 - y_3)^2 \right)^{-\frac{3}{2}} \cdot (-2(x_1 - y_1)) =
$$
$$
= \frac{x_1 - y_1}{|x-y|^3}
$$
$$
\nabla_y \frac{1}{|x-y|} = \frac{x-y}{|x-y|^3}
$$
$$
\lim_{\varepsilon \to 0+} \iint\limits_{S(x, \varepsilon)} \left( \varphi(y) \frac{\partial}{\partial n} \left(\frac{1}{|x-y|} \right) - \frac{\partial \varphi}{\partial n}(y) \frac{1}{|x-y|} \right) dS =
$$
$$
= \lim_{\varepsilon \to 0+} - \frac{1}{\varepsilon^2} \iint\limits_{S(x, \varepsilon)} \varphi(y) dS - \lim_{\varepsilon \to 0+} \frac{1}{\varepsilon} \iint\limits_{S(x, \varepsilon)} \frac{\partial \varphi}{\partial n}(y) dS =
$$
m. о среднем
$$
\stackrel{m. о среднем}{=} \lim_{\varepsilon \to 0+} - \frac{1}{\varepsilon^2} \varphi(\xi_{\varepsilon}) 4\pi\varepsilon^2 - \lim_{\varepsilon \to 0+} \frac{1}{\varepsilon} \frac{\overbrace{\partial \varphi}^{\text{огр.}} (\xi_{\varepsilon}) 4\pi\varepsilon^2 = - \varphi(x) \cdot 4\pi
$$

---

## Page: page_102.png

# 
$$\iint_{\partial G} \varphi(y) \frac{\partial}{\partial n} \left( \frac{1}{|x-y|} \right) - \frac{\partial \varphi}{\partial n}(y) \cdot \frac{1}{|x-y|} dS = -\varphi(x) \cdot 4\pi$$
Возьмем вместо $G$ шар $B(x, r)$
$$\iint_{S(x, r)} \varphi(y) \frac{\partial}{\partial n} \left( \frac{1}{|x-y|} \right) dS - \iint_{S(x, r)} \frac{\partial \varphi}{\partial n}(y) \cdot \frac{1}{|x-y|} dS = -\varphi(x) \cdot 4\pi$$
$$\underbrace{\iint_{S(x, r)} \varphi(y) \frac{\partial}{\partial n} \left( \frac{1}{|x-y|} \right) dS}_{-\frac{1}{r^2}} - \underbrace{\iint_{S(x, r)} \frac{\partial \varphi}{\partial n}(y) \cdot \frac{1}{|x-y|} dS}_{\frac{1}{r}} = -\varphi(x) \cdot 4\pi$$
$$-\frac{1}{r^2} \iint_{S(x, r)} \varphi(y) dS(y) - \frac{1}{r} \iint_{S(x, r)} \frac{\partial \varphi}{\partial n}(y) dS = -\varphi(x) \cdot 4\pi$$
$$\underbrace{\iint_{\partial B(x, r)} (\nabla \varphi, \vec{n}) dS}_{"} = \underbrace{\iiint_{B(x, r)} div \nabla \varphi dV}_{г.о.} = 0$$
$$\Delta \varphi = 0$$
т.о.
$$\frac{1}{4\pi r^2} \iint_{S(x, r)} \varphi(y) dS(y) = \varphi(x)$$
*cqfd.*

Следствие из т. Стокса

## §
### Опр.
1.  Бескоординат. определение ротора
    Пусть $\vec{F} \in C^1(G)$, $G \subseteq \mathbb{R}^3$ – обл.
    $$rot \vec{F} = B^1 e_1 + B^2 e_2 + B^3 e_3,$$ где $e_1, e_2, e_3$ – какой-то ОНС.

    $\oint_{\partial \Pi_j} (\vec{F}, \vec{\tau}) dl = \iint_{\Pi_j} (rot \vec{F}, \vec{n}) dS = \iint_{\Pi_j} B^j(y) dS(y) \stackrel{\Theta}{=}$
    
    $$G \text{ соглас.}$$
    $$\text{ориент.}$$
    
    $$ф-ла$$
    $$Стокса$$
    $$(rot \vec{F}, \vec{n}) = (B^1 e_1 + B^2 e_2 + B^3 e_3, e_j) = B^j$$
    т.о. ср.
    $\stackrel{\Theta}{=} B^j(\xi) \iint_{\Pi_j} dS = B^j(\xi) S(\Pi_j)$
    Тогда $\lim_{\Pi_j(x) \to x} \frac{\oint_{\partial \Pi_j(x)} (\vec{F}, \vec{\tau}) dl}{S(\Pi_j(x))} = \lim_{\Pi_j(x) \to x} B^j(\xi) = B^j(x), \forall x \in G$
    *cqfd.*

---

## Page: page_103.png

# Общая формула Стокса

### Теорема
Пусть $M$ - $k$-мерное гладкое ориентированное компактное множество с краем $\partial M$, ориентация которого соглас. с ориент. $M$.
Пусть $\omega$ - $C^1$-гладкая $k-1$ мерная форма на $M$. Тогда
$$\int_{\partial M} \omega = \int_M d\omega$$

### Доказательство
Будем док-ть лишь случай элемента множества, т.е. покрываемое 1-ой картой $r: I_k \to M$, $I_k$ - $k$-мерный куб,
$$I_k = \{0 \le x^j \le 1, 1 \le j \le k\}$$
Пусть $r^*\omega = a_i(x) dx^1 \wedge dx^2 \wedge ... \wedge \widehat{dx^i} \wedge ... \wedge dx^k$
*этого дифф-ла нет*
$a_i(x) \in C^1(I_k)$
$$d(r^*\omega) = da_i(x) \wedge dx^1 \wedge ... \wedge \widehat{dx^i} \wedge ... \wedge dx^k = \sum_{j=1}^k \frac{\partial a_i}{\partial x^j}(x) dx^j \wedge dx^1 \wedge ... \wedge \widehat{dx^i} \wedge ... \wedge dx^k = (-1)^{i-1} \frac{\partial a_i}{\partial x^i} dx^I, I = \{1 < 2 < ... < k\}$$
$$\int_M d\omega = \int_{I_k} r^*(d\omega) = \int_{I_k} d(r^*\omega) = (-1)^{i-1} \int_{I_k} \frac{\partial a_i}{\partial x^i} (x) dx^I = $$
$$= (-1)^{i-1} \int_{I_k} \frac{\partial a_i}{\partial x^i} (x) dx^1 dx^2 ... dx^k = (-1)^{i-1} \int_{I_{k-1}} \left( \int_0^1 \frac{\partial a_i}{\partial x^i} (x) dx^i \right) dx^1 ... \widehat{dx^i} ... dx^k = $$
$$= (-1)^{i-1} \int_{I_{k-1}} a_i(x^1 ... x^{i-1}, 1, x^{i+1} ... x^k) - a_i(x^1 ... x^{i-1}, 0, x^{i+1} ... x^k) d\widetilde{x}^I$$
$$d\widetilde{x}^I = dx^1 \wedge ... \wedge \widehat{dx^i} \wedge ... \wedge dx^k$$

$r(\partial I_k) = \partial M, \partial I_k = \Gamma_{i1} \sqcup \Gamma_{i0} \sqcup \Gamma, \quad \Gamma_{i1} = \{x_i = 1\}, \quad \Gamma_{i0} = \{x_i = 0\}$
$$\int_{\partial M} \omega = \int_{\partial I_k} r^* \omega = \int_{\Gamma_{i0}} r^* \omega + \int_{\Gamma_{i1}} r^* \omega + \int_\Gamma r^* \omega$$

---

## Page: page_104.png

# Лекция (06.05.124)
## § Точные и замкнутые формы
Покажем, что
$$\int_\Gamma r^* \omega = 0$$
$$\int_\Gamma a_i(x) dx^1 \land ... \land \widehat{dx^i} \land ... dx^k = 0$$
m.k. $\Gamma = \bigcup_{\substack{j=1 \\ j \ne i}}^k \Gamma_j$, $\Gamma_j = \{x_j = const\}$
$$dx^j|_{\Gamma_j} = 0$$
$$\int_{\Gamma_{i1}} r^* \omega = \int_{\Gamma_{i1}} a_i(x) dx^1 \land ... \land \widehat{dx^i} \land ... \land dx^k = \int_{I_{k-1}} a_i(t^1, ..., t^{i-1}, 1, t^i, ..., t^{k-1}) dt^1 ... dt^{k-1}$$
Параметризация $\Gamma_{i1}: (t^1, t^2, ..., t^{k-1}) \mapsto (t^1, t^2, ..., t^{i-1}, 1, t^i, ..., t^{k-1})$
$$0 \le t^j \le 1$$
$$1 \le j \le k-1$$
$$\Gamma_{i0}: (t^1, ..., t^{k-1}) \mapsto (t^1, t^2, ..., t^{i-1}, 0, t^i, ..., t^{k-1})$$
$$\int_{\Gamma_{i0}} r^* \omega = \int_{I_{k-1}} a_i (t^1, ..., 0, t^i, ..., t^{k-1}) dt^1 ... dt^{k-1}$$
$$\int_{\Gamma_{i1}} r^* \omega + \int_{\Gamma_{i0}} r^* \omega = \int_{I_k} [a_i(...1...) - a_i(...0...)] dt^1 ... dt^{k-1}$$

(e₁, e₂, .., eₖ) - правильная ориентация.
ее вн. н.
$(e_i, e_1, e_2, .., \widehat{e_i}, e_k) \sim (-1)^{i-1} (e_1, ..., e_k)$ - ориентация этой грани
Наша парам-ия дает такую ориент.

q.e.d.

### Опр.
Пусть $M$ - гладкое ориентируемое многообразие. Форма $\omega \in \Lambda_k^r(M), r \ge 1$
- наз. замкнутой, если $d\omega = 0$.
- наз. точной, если $\exists \eta \in \Lambda_k^{r-1}(M): \omega = d\eta$

Ясно, что $C^1$-гладкая точная форма явл. замкнутой, т.к. $d^2 = 0$.
$Z_k(M)$ - множество $k$-мерных замкнутых форм
$B_k(M)$ - множество $k$-мерных точных форм
$$B_k(M) \subseteq Z_k(M)$$

---

## Page: page_105.png

# Лекция (Дата, Глава)
## § Лемма Пуанкаре
### Лемма Пуанкаре (о точности замкн. форм)
Пусть $M$ - гладк. многообразие, гомотопное точке $x_0 \in M$, т.е.
$\exists$ отображение $h: M \times [0, 1] \to M$:
- с гомотопией.
    1) $h(x, 1) = x \quad \forall x \in M$
    2) $h(x, 0) = x_0$
    3) $h \in C^1(M \times [0, 1])$

Тогда всякая $C^1$-гладкая замкнутая форма будет точной, т.е.
$$Z_k(M) = B_k(M).$$
### Пример:
$M = \mathbb{R}^n$ или $M$ - выпуклое открытое многообразие в $\mathbb{R}^n$.
$$h(x, t) = xt + x_0(1 - t)$$

### Доказательство:
На множестве диф. форм $\Lambda_k(M \times [0, 1])$ рассмотрим линейный оператор $K$. Пусть $x_1, ..., x_n$ - лок. координаты на $M$, $t$ - коорд. на $[0, 1]$. Тогда если $\alpha \in \Lambda_k(M \times [0, 1])$
$$\alpha = a_I(x, t) dx^{i_1} \land ... \land dx^{i_k}, \quad \text{то} \quad \mathcal{X}(\alpha) = 0.$$
$\leftarrow I = \{1 \le i_1 < ... < i_k \le n\}$. Если форма не содержит $dt$, то $\mathcal{X}$ зануляется (форма попадает в ядро оп-ра $K$).
Если $\beta \in \Lambda_k(M \times [0, 1])$, $\beta = B_I(x, t) dt \land dx^{i_1} \land ... \land dx^{i_{k-1}}$, то
$$\mathcal{X}(p) = \int_0^1 B_I(x, t) dt \ dx^{i_1} \land ... \land dx^{i_{k-1}}$$
т.е. $\mathcal{X}: \Lambda_k(M \times [0, 1]) \to \Lambda_{k-1}(M)$

Рассмотрим отображения $j_1, j_0: M \to M \times I$
\begin{align*}
    j_1(x) &= (x, 1) \to \\
    j_0(x) &= (x, 0)
\end{align*}

Докажем, что $\forall \gamma \in \Lambda_k(M \times I)$
$$\mathcal{X}(d\gamma) + d\mathcal{X}(\gamma) = j_1^* \gamma - j_0^* \gamma \quad (\star)$$

За счет линейности $K, d$ и $j^*$ проверим это равенство только для базисных диф. форм.
- Если $\gamma = \alpha = a_I(x, t) dx^I$
$$\Rightarrow K(\gamma) = 0 \Rightarrow dK(\gamma) = 0$$
$$d\gamma = da_I \land dx^I = \sum_{j=1}^m \frac{\partial a_I}{\partial x_j} dx^j \land dx^I + \frac{\partial a_I}{\partial t} dt \land dx^I$$

---

## Page: page_106.png

#  
$$K(d\gamma) = \int_0^1 \frac{\partial a_I}{\partial t} (x, t) dt \ dx^I = a_I(x, 1) dx^I - a_I(x, 0) dx^I$$
$$j_1^* \gamma = a_I(x, 1) dx^I$$
$$j_0^* \gamma = a_I(x, 0) dx^I$$
$$\Rightarrow j_1^* \gamma - j_0^* \gamma = (a_I(x, 1) - a_I(x, 0))dx^I$$
м.е. формула (\*) верна.

- Если $\gamma = \beta = B_I(x, t) dt \wedge dx^I$
$$j_1^* \gamma = 0, \quad j_0^* \gamma = 0 \quad (м.к. \ dt = 0)$$
$$K(\gamma) = \int_0^1 B_I(x, t) dt \ dx^I \Rightarrow dK(\gamma) = \int_0^1 \sum_{j=1}^m \frac{\partial B_I}{\partial x_j} (x, t) dt \ dx^j \wedge dx^I$$
$$d\gamma = \sum_{j=1}^m \frac{\partial B_I}{\partial x_j} dx^j \wedge dt \wedge dx^I + \frac{\partial B_I}{\partial t} dt \wedge dt \wedge dx^I \Rightarrow$$
$$K(d\gamma) = - \int_0^1 \sum_{j=1}^m \frac{\partial B_I}{\partial x_j} (x, t) dt \ dx^j \wedge dx^I$$
$$K(d\gamma) + dK(\gamma) = 0 \Rightarrow \text{формула (A) верна.}$$

Пусть $\omega \in \Lambda_k^r(M)$ - замкнутая форма на $M$, т.е. $d\omega = 0$.
$\gamma = h^* \omega$, $h$ - гомотопия из условия:
1) $h(x, 1) = x \Leftrightarrow h \circ j_1 = id \Rightarrow (h \circ j_1)^* = j_1^* \circ h^* = id$
$$\Rightarrow j_1^* \gamma = j_1^* \circ h^* \omega = \omega$$
2) $h(x, 0) = x_0 \Leftrightarrow h \circ j_0 = x_0 \Rightarrow (h \circ j_0)^* = j_0^* \circ h^* = 0$$
(постоянное отображ.)

$$\Rightarrow j_0^* \gamma = 0$$
$$K(d\gamma) + dK(\gamma) = j_1^* \gamma - j_0^* \gamma$$
$$dh^* \omega \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad  \quad \quad  \quad \quad  \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad  \quad \quad \quad  \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad  \quad \quad \quad  \quad \quad  \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad  \quad \quad = \omega$$
$$h^*(d\omega) = 0 \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad  \quad \quad \quad \quad  \quad \quad  \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad \quad  \quad \quad \quad \quad \quad \quad \quad \quad \quad  dK(h^* \omega) = \omega$$
$$= 0$$
$$\eta$$
*cqfd.*

Примеры:
① в $\mathbb{R}^3 \quad \omega_F^1 = Pdx + Qdy + Rdz$
$$\omega_F^1 \in Z(\mathbb{R}^3) \Leftrightarrow d\omega_F^1 = \omega_{rot}^2 \Leftrightarrow rot \overrightarrow{F} = 0$$

м.е. $\overrightarrow{F}$ безвихревое или лок-но потенц.


---

## Page: page_107.png

#  
## 

по лемме Пуанкаре $\exists \eta \in \Lambda_0(\mathbb{R}^3)$: $\omega_{\vec{F}}^1 = d\eta = df = \omega_{grad f}^1$
$$\vec{F} = grad f \Leftrightarrow \vec{F}_{потенц.}$$
$$f - скал. потенциан$$
$f = ?$ $grad f = \vec{F}$
$$\begin{cases}
f'_x = P \\
f'_y = Q \\
f'_z = R
\end{cases}$$
$\eta = f = \mathcal{H}(h^* \omega_{\vec{F}}^1) = \int_0^1 P(xt, yt, zt) x dt + \int_0^1 Q(xt, yt, zt) y dt + \int_0^1 R(xt, yt, zt) z dt$
$$h(x, t) = h^* \omega_{\vec{F}}^1 = P(xt, yt, zt) d(xt) + Q(xt, yt, zt) d(yt) + R(xt, yt, zt) d(zt) =$$
$$= \tilde{P} (x dt + t dx) + \tilde{Q}(y dt + t dy) + \tilde{R} (z dt + t dz)$$
② $\in \mathbb{R}^3$ $\omega_{\vec{F}}^2 = P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy$
$$\omega_{\vec{F}}^2 \in Z(\mathbb{R}^3) \Leftrightarrow d \omega_{\vec{F}}^2 = \omega_{div \vec{F}}^3, \qquad d \omega_{\vec{F}}^3 = 0 \Leftrightarrow div \vec{F} = 0, \text{ m.e. }$$
$$\vec{F} - бездиверг. \text{ или локально-соленоидальное}$$
по лемме Пуанкаре $\exists \eta \in \Lambda_1 (\mathbb{R}^2)$: $\omega_{\vec{F}}^2 = d\eta = d \omega_B^1 = \omega_{rot B}^2$

$$\vec{F} = rot \vec{B}$$
$$\vec{B} - \text{вект. потенциал} \qquad \vec{B}_0 + \nabla \varphi$$
$$\vec{F} - \text{соленоидальное}$$
$$\mathcal{H}(h^* \omega_{\vec{F}}^2) = \mathcal{H} (P(xt, yt, zt) dy \wedge d(zt) + Q(xt, yt, zt) dz \wedge d(xt) + R(xt, yt, zt) d(xt) \wedge d(yt))$$
$$(y dt + t dy) \wedge (z dt + t dz) = yt dt \wedge dz - zt dt \wedge dy + t^2 dy \wedge dz$$
$$= \left( \int_0^1 P(xt, yt, zt) yt dt \right) dz - \left( \int_0^1 P(xt, yt, zt) zt dt \right) dy + \dots$$
③ Электромагнитный тензор

$\vec{E} = (E_1, E_2, E_3)$ - элек. напр., $E_k (x, y, z, t): \mathbb{R}^4 \to \mathbb{R}$
$\vec{B} = (B_1, B_2, B_3)$ - магн. инд. $B_k (x, y, z, t): \mathbb{R}^4 \to \mathbb{R}$

Уравнения Максвелла
$$\begin{cases}
rot \vec{E} = -\frac{1}{c} \frac{\partial \vec{B}}{\partial t} \\
div \vec{B} = 0 \\
div \vec{F} = 4 \pi \rho \\
rot \vec{B} = \frac{4 \pi}{c} \vec{j} + \frac{1}{c} \frac{\partial \vec{E}}{\partial t}
\end{cases}$$

---

## Page: page_108.png

# Заголовок лекции
$$\Omega (x, y, z, t) = \omega_E^1 \wedge dt + \frac{1}{c}\omega_B^2 = E_1 dx \wedge dt + E_2 dy \wedge dt + E_3 dz \wedge dt +$$
$$+ (B_1 dy \wedge dz + B_2 dz \wedge dx + B_3 dx \wedge dy)\frac{1}{c}$$
$$d\Omega = d\omega_E^1 \wedge dt + d\omega_B^2 = \omega_{rotE}^2 \wedge dt + \frac{1}{c}\omega_{divB}^3 + \frac{1}{c} (\frac{\partial B_1}{\partial t} dt \wedge dy \wedge dz +$$
$$+ \frac{\partial B_2}{\partial t} dt \wedge dz \wedge dx + \frac{\partial B_3}{\partial t} dt \wedge dx \wedge dy)\frac{1}{c} = $$
$$=\omega_{rotE}^2 \wedge dt + \frac{1}{c}\omega_{\frac{\partial B}{\partial t}}^2 \wedge dt = -\frac{1}{c} \omega_{\frac{\partial B}{\partial t}}^2 \wedge dt + \frac{1}{c}\omega_{\frac{\partial B}{\partial t}}^2 \wedge dt = 0.$$
### Упр.
Найти $\eta$, которая явл. 1-формой:
$$\omega^1 = A_1 dx + A_2 dy + A_3 dz + A_4 dt: d\eta = \Omega$$
## Группа когомологий
### Опр.
Пусть $M$ - гладкое многообразие. Фактор-пространство $H^k(M) = \frac{Z_k(M)}{B_k(M)}$, $k \ge 0$ наз. группой когомологий (с вещ. коэф.) порядка $k$.

Две замкнутые формы $\omega_1 \sim \omega_2 \Leftrightarrow \omega_1 - \omega_2 \in B_k(M)$.
$$M = \mathbb{R}^n \quad k=0 \quad \begin{aligned} &Z_0(\mathbb{R}^n) = \{ f: \mathbb{R}^n \to \mathbb{R}, f = const \} \equiv \mathbb{R} \\ &B_0(\mathbb{R}^n) = \{0\} \end{aligned}$$
$$\Rightarrow H^0(M) = \mathbb{R}.$$
$$k \ge 1 \quad H^k(\mathbb{R}^n) = \{0\}$$
$$H^k(M), \quad k > dim M$$
13/05/24
$$dim M = k$$
$$\Lambda_k (M) \overset{d}{\to} \Lambda_{k+1} (M) \overset{d}{\to} ... \Lambda_n (M) \to 0$$
$$d^k = d|_{\Lambda_k(M)} \quad H^k(M) = ker d^k / Im d^{k-1}$$ - группа когомологий с вещественными коэф-ми.
$$\omega^k \sim \gamma^k \Leftrightarrow \omega^k - \gamma^k = d \eta^{k-1}$$ / обычный $k$-м. куб.
$$[\omega^k] = [\gamma^k]$$
### Опр.
Гладкое отображение $C: I^k \to M$ наз. $k$-мерным сингулярным ~$k$-кубом многообразие $M$.
~ обобщение пути

---

## Page: page_109.png

#  
## 

- *k*-мерной цепью наз. формальная конечная сумма *k*-мерных сингулярных кубов, т.е. $\sum_j d_j c_j$, $d_j \in \mathbb{R}$, $c_j : I^k \to M$ - сиг. куб.
- $C_k(M)$ – множество *k*-мерных цепей на $M$ – вещест. лин. пр-во.

### Опр.
Определим на $C_k(M)$ оператор $\partial : C_k(M) \to C_{k-1}(M)$

Пусть $C : I^k \to M$ – *k*-мерный куб
Границей куба $C$ назовем $(k-1)$ мерную цепь $\sum_{i=0}^1 \sum_{j=1}^k (-1)^{i+j} C_{ij} := \partial C$

где $C_{ij}$ – естественная параметризация граней куба:

$C_{ij}(t^1, ..., t^{k-1}) = (t^1, ..., t^{j-1}, i, t^j, ..., t^{k-1}) \in I^k$
$\underbrace{}_{I^{k-1}}$

Пусть $C : I^k \to M$ – *k*-мерный сингумерный куб, тогда
$\partial C := \sum_{i=0}^1 \sum_{j=1}^k (-1)^{i+j} C \circ C_{ij}$ – граница куба $C$.

Далее, если $C$ – *k*-мерная цепь, т.е. $C = \sum_{j=1}^m d_j C_j$, то $\partial C = \sum_{j=1}^m d_j \partial C_j$

$dim M = k$

$C_k(M) \xrightarrow{\partial} C_{k-1}(M) \to ... \to C_0(M) \xrightarrow{\partial} 0$ – факторизуем ядро по образу

$\partial_k = \partial|_{C_k(M)}$
$H_k(M) = \frac{ker \partial_k}{Im \partial_{k+1}}$ – группа гомологий

$ker \partial_k$ – это такие цепи, для которых $\partial C = 0$ – *циклы*.
$Im \partial_{k+1}$ – это такие цепи $C = \partial \tilde{C}$ – *граничные циклы*.
$\in \Lambda_k(M)$

### Опр.
Пусть $\omega$ – замкнутая *k*-форма, $C$ – *k*-мерная цепь.

Тогда $\int_C \omega := \int_{I^k} C^*\omega$

Нетрудно проверить, что $\int_{\partial C} \omega = \int_C d\omega, \quad \partial^2 = 0$

$per : H_k \times H^k \to \mathbb{R}$
$per([C], [\omega]) = \int_C \omega$ – период форми $\omega$ по циклу $C$.

### Предложение:
определение отображения $per : H_k \times H^k \to \mathbb{R}$ корректно, т.е.
если $\omega \sim \gamma$ – замкнутые формы (т.е. $\omega - \gamma = d\eta$)
$C \sim b$ – *циклы* (т.е. $[-\partial b = \partial a])$ $\Rightarrow (\partial C - \partial b = 0)$, то

$\int_C \omega = \int_C \omega - \gamma + \gamma = \int_C d\eta + \int_C \gamma = \int_{\partial C} \eta + \int_C \gamma = \int_{\partial b} \eta + \int_C \gamma = \int_b d\eta + \int_C \gamma = \int_b \omega - \gamma + \gamma = \int_b \omega$


---

## Page: page_11.png

# Заголовок лекции
## §

### Опр. кр. Коши:
$\int_a^\omega f(x, y) dx$ не сх. равн. на $Y$ $\Leftrightarrow$ $\exists \varepsilon > 0$: $\forall \Delta \in (a, \omega)$ $\exists b_1, b_2 \in (\Delta, \omega)$ $\exists y \in Y$: $\left| \int_{b_1}^{b_2} f(x, y) dx \right| \ge \varepsilon$.

### Примеры:
1) $\int_1^\infty \frac{dx}{x^2 + y^2}$, $y > 1$ - сх. равн. на $[1; +\infty)$.

*По опр.:* $\forall \varepsilon > 0$ $\exists \Delta = \Delta(\varepsilon) > 1$: $\forall b > \Delta$ $\left| \int_b^\infty \frac{dx}{x^2 + y^2} \right| = \int_b^\infty \frac{dx}{x^2 + y^2} < \int_b^\infty \frac{dx}{x^2} = -\frac{1}{x} \Big|_b^\infty = \frac{1}{b} < \frac{1}{\Delta} = \varepsilon$ $\Leftrightarrow$ $\Delta = \Delta(\varepsilon) = \frac{1}{\varepsilon}$.

2) $\int_1^\infty e^{-xy} dx$, $y > 0$

$\left| \int_{b_1}^{b_2} e^{-xy} dx \right| = \left| \frac{e^{-xy}}{-y} \Big|_{x=b_1}^{x=b_2} \right| = \left| \frac{e^{-b_2 y} - e^{-b_1 y}}{y} \right| = e^{-y} (e^{-2} - e^{-3}) > e^{-2} - e^{-3} = \varepsilon$.
*Возьмем* $b_1 = 2\Delta$, $b_2 = 3\Delta$, $y = \frac{1}{\Delta}$, $\Delta > 1$ $\Rightarrow$ *нет равн. сх-ти.*

### Предложение (об отсутствии равн. сх-ти)
Пусть $f = f(x, y)$, $x \in [a, \omega)$, $y \in [c, d]$, $c, d \in \mathbb{R}$, $f \in C([a, \omega) \times [c, d])$ и $\forall y \in (c, d)$ $\int_a^\omega f(x, y) dx$ сходится, а в одной из концевых точек ($c$ или $d$) расходится.
Тогда $\int_a^\omega f(x, y) dx$ не сх. равномерно на $(c, d)$.

*Д-во:* Пусть, для опред-ия, нет сх-ти в $y = c$ для $\int_a^\omega f(x, y) dx$.

*По критерию Коши (по отриц.):*
$\exists \varepsilon > 0$: $\forall \Delta \in (a, \omega)$ $\exists b_1, b_2 \in (\Delta, \omega)$: $\left| \int_{b_1}^{b_2} f(x, c) dx \right| > \frac{\varepsilon}{2}$.

$F(y) = \int_{b_1}^{b_2} f(x, y) dx$ - *непр. ф-ция по* $y \in [c, d]$.

$|f(x, y)| \le \max_{\substack{x \in [b_1, b_2] \\ y \in [c, d]}} |f(x, y)| = M < \infty \leftarrow$ (бесконечность $\ddot{ \smile }$)

*В виду* непр-ти $F(y)$ и нер-ва $|F(c)| > \frac{\varepsilon}{2}$ $\Rightarrow$ $\exists \delta > 0$: $\forall y \in [c, c+\delta]$ $|F(y)| > \frac{\varepsilon}{2}$.

*Получаем отриц. кр. Коши для равн. сх-ти на* $(c, d)$:
$\exists \varepsilon > 0$: $\forall \Delta \in (a, \omega)$ $\exists b_1, b_2 \in (\Delta, \omega)$ $\exists y \in Y$: $\left| \int_{b_1}^{b_2} f(x, y) dx \right| > \frac{\varepsilon}{2}$.
$(y \in (c, c+\delta))$


---

## Page: page_110.png

# Лекция (Дата, Глава)

$$=\int_{\partial B} \eta + \int_{\delta} \gamma + \int_{\partial a} \gamma = \int_6 \gamma + \int_a d\gamma = \int_6 \gamma.$$

## § Теория (де Рама)
Пусть $M$ - гладкое многообразие, замкнутая $k$-форма $\omega$ будет точной $\Leftrightarrow \forall k$-цикла per$([C], [w]) = \int_C \omega = 0$.
### Предложение:
$\mathbb{R}^n \setminus \{0\}$ не гомотопно точке (т.е. не стягивается в точку).
*Доказательство*: достаточно предъявить замкнутую, но не точную форму.

А по теореме де Рама можно взять такую замкнутую форму, чтобы $\exists$ цикл $C$: $\int_C \omega \neq 0$.
Возьмем форму Гаусса:
$$w_r^{n-1}(x, v_1, ..., v_{n-1}) = \frac{1}{\|x\|^n} det(x, v_1, ..., v_{n-1}) = \frac{1}{\|x\|^n} \begin{vmatrix} x_1 & v_1^1 & ... & v_{n-1}^1 \\ x_2 & v_1^2 & ... & v_{n-1}^2 \\ \vdots & \vdots & \vdots & \vdots \\ x_n & v_1^n & .. & v_{n-1}^n \end{vmatrix} =$$
$$ = \frac{1}{\|x\|^n} \sum_{j=1}^n (-1)^j x_j (dx^1 \land ... \land \widehat{dx^j} \land ... \land dx^n)(v_1, ..., v_{n-1}) =$$
$$w_r^{n-1}(x) = \frac{1}{\|x\|^n} \sum_{j=1}^n (-1)^j x_j dx^1 \land ... \land \widehat{dx^j} \land ... \land dx^n \in \Lambda_{n-1}^\infty (\mathbb{R}^n \setminus \{0\})$$
$$dw_r^{n-1}(x) = \sum_{j=1}^n d\left( \frac{(-1)^j x_j}{\|x\|^n} \right) \land dx^1 \land ... \land \widehat{dx^j} \land ... \land dx^n$$
$$= \sum_{j=1}^n \frac{\partial}{\partial x_j} \left( \frac{(-1)^j x_j}{\|x\|^n} \right) dx^j \land dx^1 \land ... \land \widehat{dx^j} \land ... \land dx^n$$
*нас интересует только $\frac{\partial}{\partial x_j}$, потому что остальные сокращаются*
$$= -\sum_{j=1}^n \frac{\partial}{\partial x_j} \left( \frac{x_j}{\|x\|^n} \right) dx^{\Gamma}$$
$$\left( \frac{x_i}{(x_1^2 + ... + x_n^2)^{\frac{n}{2}}} \right)'_{x_j} = \frac{\|x\|^n - x_j \left( \frac{n}{2} \right)}{\|x\|^{2n}} = \frac{x_1^2 + ... + x_n^2 - nx_j^2}{(x_1^2 + ... + x_n^2)^{\frac{n}{2} + 1}} = \frac{x_1^2 + (1-n)x_j^2 + ... + x_n^2}{(x_1^2 + ... + x_n^2)^{\frac{n}{2} + 1}}$$
$$= 0.$$
В качестве $n-1$ - цикла возьмем $C: I^{n-1} \to S^{n-1} = S^{n-1}(0,1)$
$$\oint_{S^{n-1}} w_r^{n-1} = \oint_{S^{n-1}} \sum_{j=1}^n (-1)^j x^j dx^1 \land ... \land \widehat{dx^j} \land ... \land dx^n = \oint_{\partial B_n(0,1)} \sum_{j=1}^n (-1)^j x^j dx^1 \land ... \land dx^n =$$

---

## Page: page_111.png

$$ = \int_{B_n} \sum_{j=1}^n (-1)^j dx^1 \land ... \land \widehat{dx^j} \land ... \land dx^n = -\sum_{j=1}^n \int_{B_n} dx^1...dx^n = -nV(B_n) $$
*no m. de Рама $\omega_r$ не точна.*

### Теорема (Брауэра о неподвижной точке)
Пусть $f: (\overline{B_n(0,1)} \to \overline{B_n(0,1)})$ - непрерывное отображение. Тогда $\exists x \in \overline{B_n(0, 1)} \ f(x) = x$.

### Доказательство:
(Случай $f \in C^1$-гладкое)
Пусть $f$ не имеет неподвиж. точек.
Тогда $\exists \ C^1$-гладкое отображение:
$g: \overline{B_n(0,1)} \to S_{n-1}(0,1)$
$$g|_{S_{n-1}} = id$$
$$g(x) = x \ \forall x \in S_{n-1}$$
$$\omega_g = g_1(x) dg_2 \land dg_3 \land ... \land dg_n$$
$$\omega = x_1 dx_2 \land ... \land dx_n$$
$$\omega_g|_{S_{n-1}} = \omega$$
$$0 = \int_{B_n(0,1)} dg_1 \land ... \land dg_n = \int_{B_n(0,1)} d\omega_g = \oint_{S_{n-1}} \omega_g = \oint_{S_{n-1}} \omega = \int_{B_n(0,1)} d\omega = V(B_n(0,1)) \neq 0$$
$$g_1^2(x) + g_2^2(x) + ... + g_n^2(x) = 1$$
$$g_1(x) dg_1(x) + ... + g_n(x) dg_n(x) = 0.$$
*cqfd.*

### Приволинейные ортогональные координаты
Пусть диффеоморфизм из $\mathbb{R}^3$ в $\mathbb{R}^3$
\begin{cases}
x = x(u, v, w) \\
y = y(u, v, w) \\
z = z(u, v, w)
\end{cases}

$$r_u = (x_u, y_u, z_u)$$
$$r_v = (x_v, y_v, z_v)$$
$$r_w = (x_w, y_w, z_w)$$

---

## Page: page_112.png

# Заголовок лекции
Матричный тензор $\equiv$ матрица Грама:
$$\begin{pmatrix} (e_u, e_u) & (e_u, e_v) & (e_u, e_w) \\ (e_v, e_u) & (e_v, e_v) & (e_v, e_w) \\ (e_w, e_u) & (e_w, e_v) & (e_w, e_w) \end{pmatrix} = \begin{pmatrix} (e_u, e_u) & 0 & 0 \\ 0 & (e_v, e_v) & 0 \\ 0 & 0 & (e_w, e_w) \end{pmatrix} \uparrow \text{ ортог.}$$
$$H_u = \sqrt{(e_u, e_u)}$$
$$H_v = \sqrt{(e_v, e_v)}$$ коэффициенты Ламе
$$H_w = \sqrt{(e_w, e_w)}$$
О.Н.Б. $e_u = \frac{e_u}{H_u}$, $e_v = \frac{e_v}{H_v}$, $e_w = \frac{e_w}{H_w}$
$$dV = H_u H_v H_w \, du \, dv \, dw$$
$$dS_{uv} = H_u H_v \, du \, dv$$
$$dS_{uw} = H_u H_w \, du \, dw$$
$$dS_{vw} = H_v H_w \, dv \, dw$$

## §
(1)
$$grad \varphi = a^u e_u + a^v e_v + a^w e_w$$
$$(grad \, \varphi, h) = d\varphi(h)$$
$$h = e^u : (a^u e_u + a^v e_v + a^w e_w, e^u) = d \varphi (e^u) =$$
$$=\frac{\partial \varphi}{\partial x} dx(e^u) + \frac{\partial \varphi}{\partial y} dy(e^u) + \frac{\partial \varphi}{\partial z} dz(e^u) = \frac{\partial \varphi}{\partial x} \frac{\partial x}{\partial u} \cdot \frac{1}{H_u} + \frac{\partial \varphi}{\partial y} \frac{\partial y}{\partial u} \cdot \frac{1}{H_u} + \frac{\partial \varphi}{\partial z} \frac{\partial z}{\partial u} \cdot \frac{1}{H_u} =$$
$$=\frac{\partial \varphi}{\partial u} \cdot \frac{1}{H_u}$$
$$a^u = \frac{1}{H_u} \frac{\partial \varphi}{\partial u}, \quad a^v = \frac{1}{H_v} \frac{\partial \varphi}{\partial v}, \quad a^w = \frac{1}{H_w} \frac{\partial \varphi}{\partial w}$$
16.05.24

## §
(2) Дивергенция
Пусть $\overrightarrow{F} = F^u e_u + F^v e_v + F^w e_w$
$$div \overrightarrow{F} = \frac{1}{H_u H_v H_w} \left( \frac{\partial}{\partial u} (F^u H_v H_w) + \frac{\partial}{\partial v} (F^v H_u H_w) + \frac{\partial}{\partial w} (F^w H_u H_v) \right)$$
[НРЗБ] якобиан

Док-во: пусть $(u_0, v_0, w_0)$ - фикс. точка. Окружим ее криволин. кубом, натянутым на базисные вектора $e_u, e_v, e_w$:


---

## Page: page_113.png

# Заголовок лекции
## §

$|u - u_0| < \varepsilon$
$|v - v_0| < \varepsilon$
$|w - w_0| < \varepsilon$

$$div \vec{F} (u_0, v_0, w_0) = \lim_{\varepsilon \to 0+} \frac{\iint_{\partial V_\varepsilon} (\vec{F}, \vec{n}) dS}{V_\varepsilon}$$

Будем считать, что $\vec{F} = F^u \vec{e}_u$ (ввиду линейности $div$, остальные слагаемые по аналогии)

$$V_\varepsilon = \int_{u_0 - \varepsilon}^{u_0 + \varepsilon} \int_{v_0 - \varepsilon}^{v_0 + \varepsilon} \int_{w_0 - \varepsilon}^{w_0 + \varepsilon} H_u H_v H_w du dv dw = \underbrace{H_u(u_\varepsilon, v_\varepsilon, w_\varepsilon) H_v(u_\varepsilon, v_\varepsilon, w_\varepsilon) H_w(u_\varepsilon, v_\varepsilon, w_\varepsilon)}_{\text{м.осреднем}} \cdot (2\varepsilon)^3$$
$$\downarrow \atop {\varepsilon \to 0+} \atop {H_u(u_0, v_0, w_0) H_v(u_0, v_0, w_0) H_w(u_0, v_0, w_0)}$$

На гранях, где $n = \pm \vec{e}_v$, $n = \pm \vec{e}_v$, $(\vec{F}, \vec{n}) = (F^u \vec{e}_u, \vec{n}) = 0$.
Остаются две грани $(u_0 \pm \varepsilon, v, w)$, там нормаль $\pm \vec{e}_u$

$|v - v_0| \le \varepsilon$ на $\Gamma_1$, $\vec{n} = \vec{e}_u$
$|w - w_0| \le \varepsilon$ на $\Gamma_0$, $\vec{n} = -\vec{e}_u$

м.о. $\iint_{\partial V_\varepsilon} (\vec{F}, \vec{n}) dS = \iint_{\Gamma_1} F^u dS - \iint_{\Gamma_0} F^u dS = \int_{v_0 - \varepsilon}^{v_0 + \varepsilon} \int_{w_0 - \varepsilon}^{w_0 + \varepsilon} F^u(u_0 + \varepsilon, v, w) H_v H_w dv dw - \int_{v_0 - \varepsilon}^{v_0 + \varepsilon} \int_{w_0 - \varepsilon}^{w_0 + \varepsilon} F^u(u_0 - \varepsilon, v, w) H_v H_w dv dw = \int_{v_0 - \varepsilon}^{v_0 + \varepsilon} \int_{w_0 - \varepsilon}^{w_0 + \varepsilon} (F^u(u_0 + \varepsilon) H_v(u_0 + \varepsilon) H_w(u_0 + \varepsilon) - F^u(u_0 - \varepsilon) H_v(u_0 - \varepsilon) H_w(u_0 - \varepsilon)) dv dw = \int_{u_0 - \varepsilon}^{u_0 + \varepsilon} \frac{\partial}{\partial u} (F^u H_v H_w) du$
$$ = \int_{u_0 - \varepsilon}^{u_0 + \varepsilon} \int_{v_0 - \varepsilon}^{v_0 + \varepsilon} \int_{w_0 - \varepsilon}^{w_0 + \varepsilon} \frac{\partial}{\partial u} (F^u H_v H_w) du dv dw = \frac{\partial}{\partial u} (F^u H_v H_w) (\tilde{u}_\varepsilon, \tilde{v}_\varepsilon, \tilde{w}_\varepsilon) \cdot (2\varepsilon)^3$$
$$\text{м.осреднем} \atop {\downarrow \atop {\varepsilon \to 0+}} \atop {\frac{\partial}{\partial u} (F^u H_v H_w) (u_0, v_0, w_0)}$$

$$div \vec{F} (u_0, v_0, w_0) = \lim_{\varepsilon \to 0+} \frac{\frac{\partial}{\partial u} (F^u H_v H_w) \cdot (2\varepsilon)^3}{H_u H_v H_w \cdot (2\varepsilon)^3} = \frac{1}{H_u H_v H_w} \frac{\partial}{\partial u} (F^u H_v H_w)$$

### Опр. Оператор Лапласа $\triangle = \nabla^2$:

Пусть $f = f(u, v, w) \in C^2$
$$\triangle f = div(grad f) = div(\frac{1}{H_u} \frac{\partial f}{\partial u} \vec{e}_u + \frac{1}{H_v} \frac{\partial f}{\partial v} \vec{e}_v + \frac{1}{H_w} \frac{\partial f}{\partial w} \vec{e}_w) =$$
$$= \frac{1}{H_u H_v H_w} (\frac{\partial}{\partial u} (\frac{\partial f}{\partial u} \frac{H_v H_w}{H_u}) + \frac{\partial}{\partial v} (\frac{\partial f}{\partial v} \frac{H_u H_w}{H_v}) + \frac{\partial}{\partial w} (\frac{\partial f}{\partial w} \frac{H_u H_v}{H_w}))$$

### Опр.
Пусть $\vec{F} = F^u \vec{e}_u + F^v \vec{e}_v + F^w \vec{e}_w$, тогда

$$rot \vec{F} = \frac{1}{H_u H_v H_w} \begin{vmatrix} H_u \vec{e}_u & H_v \vec{e}_v & H_w \vec{e}_w \\ \frac{\partial}{\partial u} & \frac{\partial}{\partial v} & \frac{\partial}{\partial w} \\ H_u F^u & H_v F^v & H_w F^w \end{vmatrix}$$

Пусть $\vec{F} = F^u \vec{e}_u$, тогда


---

## Page: page_114.png

# Заголовок лекции
## § 1°
Касательные вектора к ребрам: $\pm e_\vartheta$, $\pm e_w$
$$\vec{F} = B^u e_u + B^\vartheta e_\vartheta + B^w e_w$$
$$B^u = \lim_{\varepsilon \to 0} \frac{\oint_{S_\varepsilon} (\vec{F}, \vec{l}) de}{S_\varepsilon} = 0 \qquad \text{m.k.} \qquad \vec{F} \perp \vec{l}$$
## § 2°
$$B^\vartheta = \lim_{\varepsilon \to 0} \frac{\oint_{S_\varepsilon} (\vec{F}, \vec{l}) de}{S_\varepsilon} = \lim_{\varepsilon \to 0} \frac{\int_{L_1} F^u de - \int_{L_0} F^u de}{H_u H_w (2\varepsilon)^2} = $$
$$= \lim_{\varepsilon \to 0} \frac{\int_{u_0}^{u_0 + \varepsilon} F^u(u, v_0, w_0 + \varepsilon) H_u du - \int_{u_0 - \varepsilon}^{u_0} F^u(u, v_0, w_0 - \varepsilon) H_u du}{H_u H_w (2\varepsilon)^2} =$$
$$= \lim_{\varepsilon \to 0 +} \frac{\frac{\partial}{\partial w} (F^u H_u)(u_\varepsilon, v_0, w_\varepsilon) \cdot (2\varepsilon)^2}{H_u H_w (2\varepsilon)^2} = \frac{1}{H_u H_w} \frac{\partial}{\partial w} (F^u H_u) (u_0, v_0, w_0)$$

## § 3°
По аналогии $B^w = \frac{-1}{H_u H_\vartheta} \frac{\partial}{\partial \vartheta} (F^u H_u)$
$$\vec{B} = \frac{1}{H_u H_\vartheta H_w} \begin{vmatrix}
H_u e_u & H_\vartheta e_\vartheta & H_w e_w \\
\frac{\partial}{\partial u} & \frac{\partial}{\partial \vartheta} & \frac{\partial}{\partial w} \\
F^u H_u & 0 & 0
\end{vmatrix} = \frac{e_\vartheta}{H_u H_w} \cdot 0 + \frac{e_\vartheta}{H_u H_w} \frac{\partial}{\partial w}(F^u H_u) -$$
$$- \frac{e_w}{H_u H_\vartheta} \cdot \frac{\partial}{\partial \vartheta}(F^u H_u).$$

### Пример: Сферическая система координат
$$\begin{cases}
x = R \cos \varphi \sin \Theta \\
y = R \sin \varphi \sin \Theta \\
z = R \cos \Theta
\end{cases} \qquad
\begin{aligned}
&R > 0 \\
&\Theta \in (0; \pi) \\
&\varphi \in (0; 2\pi)
\end{aligned}$$
$$r_R = (\cos \varphi \sin \Theta, \sin \varphi \sin \Theta, \cos \Theta) \qquad H_R = 1$$
$$r_\varphi = (-R \sin \varphi \sin \Theta, R \cos \varphi \sin \Theta, 0) \qquad H_\varphi = R \sin \Theta$$
$$r_\Theta = (R \cos \varphi \cos \Theta, R \sin \varphi \cos \Theta, -R \sin \Theta) \qquad H_\Theta = R$$
Пусть $\vec{F} = \frac{e_R}{R^2}$
$$div \vec{F} = \frac{1}{R^2 \sin \Theta} \left(\frac{\partial}{\partial R} \left(\frac{1}{R^2} R^2 \sin \Theta\right) + \frac{\partial}{\partial \varphi} (0) + \frac{\partial}{\partial \Theta}(0) \right) = 0.$$
$$\frac{\partial}{\partial R} (\sin \Theta) = 0$$

---

## Page: page_115.png

$$\operatorname{rot} \vec{F} = \frac{1}{R^2\sin\theta} \begin{vmatrix} \vec{e}_R & R\sin\theta \vec{e}_\varphi & R\vec{e}_\theta \\ \frac{\partial}{\partial R} & \frac{\partial}{\partial \varphi} & \frac{\partial}{\partial \theta} \\ \frac{1}{R^2} & 0 & 0 \end{vmatrix} = \vec{e}_R \cdot 0 + \vec{e}_\varphi \cdot 0 + \vec{e}_\theta \cdot 0 = 0.$$
Упр. Найти $\Delta f$ в сферич. с.к.

# Разбиение единицы

1.  Пусть $(M, d)$ – метрическое пр-во, $U, V$ – откр. мн-ва в $M$, такие, что $\overline{U} \subset V$. Нужно построить непрерывную функцию $f_{U, V}$ такую, что:
    - 1) $f \equiv 1$ на $\overline{U}$;
    - 2) $f \equiv 0$ на $M \setminus V$.

$$
\begin{array}{c}
U \quad V \\
M
\end{array}
$$

Предложение: пусть $(M, d)$ – м. пр-во, $U, V$ – откр., $\overline{U} \subset V$. Тогда $\forall \alpha \in (0, 1]$ $\exists f_{U, V}$ – гёльдеровская с показателем $\alpha$.

Док-во:
$\newline$
① Пусть $\sigma: \mathbb{R}_+ \to \mathbb{R}$ – гёльд. ф-ия с показателем $\alpha \in (0, 1]$, т.е. $\exists H_0 > 0: \forall x, y \ge 0 \quad |\sigma(x) - \sigma(y)| \le H_0 \cdot |x - y|^\alpha$.

Пусть $A \subset M$. Положим $\sigma_{h, A}(z) = \sigma(h \cdot d(z, A)): M \to \mathbb{R}$
$$
\begin{array}{c}
z \in M \\
h > 0
\end{array}
$$
Покажем, что $\sigma_{h, A}$ – гёль-ся на $M$ с показателем $\alpha$.

$|\sigma_{h, A}(z_1) - \sigma_{h, A}(z_2)| = |\sigma(h \cdot d(z_1, A)) - \sigma(h \cdot d(z_2, A))| \le H_0 \cdot |h \cdot d(z_1, A) - h \cdot d(z_2, A)|^\alpha = $
$= H_0 \cdot h^\alpha \cdot |d(z_1, A) - d(z_2, A)|^\alpha \le H_0 h^\alpha d^\alpha(z_1, z_2)$

$|d(z_1, A) - d(z_2, A)| \le d(z_1, z_2)$
$\newline$
$\forall y \in A \quad d(z_1, z_2) \le d(z_1, y) + d(z_2, y) \le d(z_1, w) + d(w, y) + d(z_2, \tilde{w}) + d(\tilde{w}, y)$

$$
\begin{array}{c}
z_1  \qquad A \qquad d(z_k, A) = \inf_{y \in A} d(z_k, y) \qquad \forall \varepsilon > 0 \ \exists y_\varepsilon \in A: d(z_k, y_\varepsilon) < d(z_k, A) + \varepsilon \\
z_2
\end{array}
$$

$d(z_1, z_2) \le \inf_{w, \tilde{w}, y \in A} d(z_1, w) + d(z_2, \tilde{w}) + d(w, y) + d(\tilde{w}, y) \le \inf_{w \in A} d(z_1, w) + \inf_{\tilde{w} \in A} d(z_2, \tilde{w}) + $
$+ \inf_{y, w, \tilde{w} \in A} (d(w, y) + d(\tilde{w}, y)) = d(z_1, A) + d(z_2, A) + 0$

$d(z_1, y) \le d(z_1, z_2) + d(z_2, y)$
$\newline$
$\inf_{y \in A} d(z_1, A) \le d(z_1, z_2) + d(z_2, A)$

---

## Page: page_116.png

# 20.05.24
Пусть $\sigma(x): \mathbb{R}^+ \to \mathbb{R}$. $\sigma(x) = \begin{cases} 1 - x, x \in [0, 1] \\ 0, x > 1 \end{cases}$

Нужно увидеть, что $\forall x, y \ge 0 \quad |\sigma(x) - \sigma(y)| \le |x - y|^\alpha$, $\forall \alpha \in (0, 1]$
Нужно проверить $\alpha$ неравенство:
$1 - x \le |x - y|$
$1 - x \le (1 - x + z)^\alpha$
$\ln(1 - x) \le \alpha \ln(1 - x + z)$
$$
\begin{array}{c}
1 + z \\
z \ge 0
\end{array}
$$
$$
1 - x = u, \quad u \le (u + z)^\alpha
$$
$$
u \in [0, 1]
$$
$$
z \ge 0
$$
$$
u \le u^\alpha < (u + z)^\alpha
$$
$$
\delta = d(U, \partial V)
$$
_(pacem.)_
$$
f_{u,v}(x) = \sigma_{\frac{1}{\delta}, u}(x) = \sigma(\frac{1}{\delta} d(x, u))
$$
– гёльдеровская с показателем $\alpha \in (0, 1)$.
$$
f_{u,v}(x) = 1 \Leftrightarrow \sigma(\frac{1}{\delta} d(x, u)) = 1 \Leftrightarrow d(x, u) = 0 \Leftrightarrow x \in \partial U
$$
$$
l \in n \quad x \in M \setminus U \Rightarrow d(x, u) > \delta \Rightarrow \frac{1}{\delta} d(x, u) > 1 \Rightarrow \sigma(\frac{1}{\delta} d(x, u)) = 0 = f_{u,v}(x).
$$
_cqfd._
### Предложение
Пусть $U, V \subset \mathbb{R}^n$ - *откр.*, $A \subset U \subset V$.
Тогда $\forall k \ge 1 \quad \exists C^k$ - *гладк.* ф-ция $f_{u,v}$, такая, что:
- $f_{u,v} = 1$ на $d U$
- $f_{u,v} = 0$ на $M \setminus V$
- $0 \le f_{u,v} \le 1$
_добавить к пред. предп-ию_

### Доказательство:
$$
\delta = dist(U, \partial V)
$$
– евклидово расст. $\delta$ в $\mathbb{R}^n$
$$
U^{\frac{\delta}{2}} = \bigcup_{x \in U} B(x, \frac{\delta}{2})
$$
– $\frac{\delta}{2}$ - *открытое расширение*
Пусть $\omega$ – *шапочка Соболева*, т.е. $\omega > 0$, $supp \omega = B(0, 1)$
$$
\omega_{\frac{\delta}{2}} = \frac{1}{(\frac{\delta}{2})^n} \omega(\frac{x}{\frac{\delta}{2}}), \quad supp \omega_{\frac{\delta}{2}} = B(0, \frac{\delta}{2}) \quad \int_{\mathbb{R}^n} \omega dx = 1, \quad \omega \in C^\infty(\mathbb{R}^n, \mathbb{R})
$$
$$
f_{u,v}(x) = (f_{u^{\frac{\delta}{2}}} * \omega_{\frac{\delta}{2}}) (x) = \int_{\mathbb{R}^n} f_{u^{\frac{\delta}{2}}}(y) \omega_{\frac{\delta}{2}}(x - y) dy \in C^\infty(\mathbb{R}^n, \mathbb{R})
$$

---

## Page: page_117.png

```markdown
#  

$$ \int_{U_{\frac{\delta}{2}}} w_{\frac{\delta}{2}}(x-y) dy = 0$$

[Рисунок с областями]

$$lenu \ x \in \mathbb{R}^n \setminus V$$
$$B(x, \frac{\delta}{2}) \cap U_{\frac{\delta}{2}} = \varnothing$$
$$supp \ w_{\frac{\delta}{2}}(x-y)$$

$$lonu \ x \in cl U$$
$$B(x, \frac{\delta}{2}) \cap U_{\frac{\delta}{2}} = B(x, \frac{\delta}{2})$$
$$\int_{B(x, \frac{\delta}{2})} w_{\frac{\delta}{2}}(x-y) dy = \int_{B(0, \frac{\delta}{2})} w_{\frac{\delta}{2}}(y) dy = 1$$

### Опр.
Пусть $M$ - $C^k$ гладк. мн-ие, $X \subset M$.
Система $C^k$ - гладких ф-ий $\{e_d, d \in I\}$ наз. *разбиением единицы* мн-ва $X$ на мн-ии $M$, если:
- 1) $0 \le e_d \le 1$
- 2) $\forall x \in X \ \exists$ окр. $U(x)$ на $M$: лишь конечное число $e_d \neq 0$ на $U$ (ост. зану.)
- 3) $\sum_{d \in I} e_d(x) = 1 \ \forall x \in X$.

### Опр.
Пусть $\{E_\gamma, \gamma \in \Gamma\}$ - открытое покрытие мн-ва $X$. наз. *Разбиение единицы* $\{e_d, d \in I\}$ мн-ва $X$ на $M$ *подчинёнными покрытию* $E$, если $\forall d \in I \ \exists \gamma \in \Gamma: supp \ e_d \subset E_\gamma$.

### Теорема (о сущ-ие разбиения единицы)
Пусть $M$ - $C^k$ - гладкое многообразие, $(U_k, \varphi_k)$, $1 \le k \le m$ - конечный набор карт из атласа $A(M)$, покрывающий компактное множества $X \subset M$. Тогда для $X$ сущ. разбиение единицы, подчиненное этому покрытию.

### До-во:
[Диаграмма с областями]
$M$
$\varphi_k: U_k \to \mathbb{R}^n$, $n = dim \ M$
$\psi_k: U_k \to \mathbb{H}^n$
$$\forall x \in X, \ пусть \ x \in U_j, \ t = \varphi_j(x) \in \mathbb{R}^n$$

[Диаграмма с областями]
$t \in U_t$
$cl \ U_t \subset V_t$
$U_t, V_t$ - откр. в $\mathbb{R}^n$ (в $\mathbb{H}^n$)
$$\varphi_j^{-1}(U_t) \subset U_j$$
$$x \in \varphi_j^{-1}(V_t) \subset U_j$$
```

---

## Page: page_118.png

# Заголовок лекции

$$\bigcup_{j=1}^m \varphi_j^{-1}(V_{\varphi_j(x)}) \supset \mathcal{X} \Rightarrow \exists x_1, \dots, x_p \in \mathcal{X} \quad \varphi_j^{-1}(V_{t_i}) - \text{конеч. покр.} \mathcal{X}$$
$$\varphi_j^{-1}(V_{t_i}) \subset U_j$$
Для откр. множеств $U_{t_i} \subset V_{t_i}$ построим функцию $f_{U_{t_i}, V_{t_i}}(x)$ из предыдущ. [НРЗБ].
$$g_{ij} = f_{V_{t_i}, U_{t_i}} \circ \varphi_j : U_j \to \mathbb{R}, \quad g_{ij} \in C^k$$
$$0 \le g_{ij} \le 1$$
$$g_{ij} = 1, \text{ если } x \in \varphi_j^{-1}(U_{t_i})$$
$$g_{ij} = 0, \text{ если } x \in U_j \setminus \varphi_j^{-1}(V_{t_i})$$

Продолжаем $g_{ij}$ на все $M$ равенством
$$g_{ij} = 0 \quad \forall x \notin U_j$$
$$supp \ g_{ij} \subset U_j \text{ (очевидно из построения)}$$
$$e_{ij} = \frac{g_{ij}}{\sum_{i=1}^p \sum_{j=1}^m g_{ij}(x)} - \text{ искомое разбиение единицы}$$
$$\sum_{i=1}^p \sum_{j=1}^m e_{ij} = 1 \text{ по построению.}$$
q.e.d.

### Опр.
Пусть $M$ - $C^k$ гладкое многообразие, $\omega \in \Lambda_p(M)$, $supp \ \omega = \overline{\{x \in M : \omega(x) \neq 0\}}$
Пусть $supp \ \omega \subset M$
Тогда $\int_M \omega = \sum_{k=1}^m \int_{\mathbb{R}^p} r_k^* (e_k \omega)$, где $\{e_k\}_{k=1}^\infty$ - $C^k$ гладкое разбиение единицы многообразия $supp \ \omega$ на $M$, подчиненное покрытию $supp \ \omega$ картами $(r_k, \mathbb{I}^p)$.

### Замечание
(к формуле Стокса)
$$\int_{\partial M} \omega = \int_M d\omega \text{ справедлива, если вместо компактности } M$$
требовать компактность $supp \ \omega$ в $M$.

### Упр.
Посмотреть формулу Гаусса в $\mathbb{R}^2$.


---

## Page: page_12.png

# Признаки равномерной сходимости
## §
### Теорема Вейерштрасса (мажорантный признак)
Пусть $f(x, y)$, $x \in [a, \omega)$, $y \in Y$ и $|f(x, y)| \le g(x, y)$ $\forall x \in [a, \omega)$ при этом $\int_a^\omega g(x, y) dx$ сходится равномерно на $Y$. $\forall y \in Y$
Тогда $\int_a^\omega |f(x, y)| dx$ сходится равномерно на $Y$.

### Доказательство
$\forall \varepsilon > 0$ $\exists \Delta \in (a, \omega) : \forall b_1, b_2 \in (\Delta, \omega)$
$$\int_{b_1}^{b_2} |f(x, y)| dx \le \int_{b_1}^{b_2} g(x, y) dx < \varepsilon$$

## §
### Теорема (признак Абеля-Дирихле)
Пусть $\int_a^\omega f(x, y) \cdot g(x, y) dx$ - несобственный интеграл Римана, $y \in Y$.
Если выполнено одно из двух условий $(A_1)$, $(A_2)$ или $(D_1)$, $(D_2)$, то интеграл сходится равномерно на $Y$.
- $(D_1)$ $F(b, y) = \int_a^b f(x, y) dx$ - равномерно ограничена, т.е.
$\forall b \in [a, \omega)$ $|F(b, y)| \le C < \infty$
$\forall y \in Y$
- $(D_2)$ $\forall y \in Y$ $g(x, y)$ монотонна по $x$,
$g(x, y) \xrightarrow[x \to \omega - 0]{} 0$
$\forall x \in [a, \omega)$
$\forall y \in Y$.
- $(A_1)$ $\int_a^\omega f(x, y) dx$ сходится равномерно на $Y$.
- $(A_2)$ $g(x, y)$ монотонна по $x$
$\forall y \in Y$ и равномерно ограничена, т.е.
$|g(x, y)| \le C < \infty$

### Доказательство
$\forall \varepsilon > 0$ $\exists \Delta \in (a, \omega) : \forall b_1, b_2 \in (\Delta, \omega)$ надо $\left| \int_{b_1}^{b_2} f(x, y) g(x, y) dx \right| < \varepsilon$.
$$\int_{b_1}^{b_2} f(x, y) g(x, y) dx = g(b_1+0, y) \int_{b_1}^{\xi} f(x, y) dx + g(b_2-0, y) \int_{\xi}^{b_2} f(x, y) dx$$
$$ \uparrow $$
$$2^{ая} \text{ м. о среднем}$$
$$\exists \xi \in (b_1, b_2) \text{ т.д. монот.}$$
$(D_1) \Rightarrow \left| \int_{b_1}^\xi f(x, y) dx \right| \le 2C$, $\left| \int_{\xi}^{b_2} f(x, y) dx \right| \le 2C$
$(D_2) \Rightarrow |g(b_1 + 0, y)| \le \frac{\varepsilon}{4C}$, $|g(b_2 - 0, y)| \le \frac{\varepsilon}{4C}$


---

## Page: page_13.png

#  
$$ (A_1) \Rightarrow \left| \int_{\xi}^{\beta_2} f(x, y) dx \right| < \frac{\varepsilon}{2C} $$
$$ \left| \int_{\beta_1}^{\xi} f(x, y) dx \right| < \frac{\varepsilon}{2C} $$
$$ (A_2) \Rightarrow \begin{cases} |g(\beta_1+0, y)| \le C \\ |g(\beta_2-0, y)| \le C \end{cases} $$
## §
### Пример
$I(y) = \int_0^{+\infty} e^{-xy} \frac{\sin x}{x} dx, y \ge 0$

Покажем, что есть равномерная сходимость на $[0; +\infty)$.
$$f(x, y) = \frac{\sin x}{x}, \quad g(x, y) = e^{-xy}$$
По пр. Абеля:
$$ (A_1) \quad \int_0^\infty \frac{\sin x}{x} dx \quad \text{сходится равномерно.} \quad \text{(по пр. Дирихле)} $$
$$ (A_2) \quad y = 0 \quad e^{-x \cdot 0} = 1 - \text{монот.} $$
$$ y > 0 \quad e^{-xy} \searrow 0 $$
$$ \sup_{\substack{x > 0 \\ y \ge 0}} e^{-xy} = 1 \Rightarrow \text{лит. сх. равном. по пр. Абеля.} $$
### Теорема (о перестановочности пределов)
Пусть $G(x, y), x \in X, y \in Y, x_0 \in \lim X, y_0 \in \lim Y$.

Пусть $G(x, y) \xrightarrow[x \to x_0]{y} A(y)$.

$\forall x \in X \quad G(x, y) \xrightarrow[y \to y_0]{} B(x)$

Тогда $\lim_{y \to y_0} (\lim_{x \to x_0} G(x, y)) = \lim_{x \to x_0} (\lim_{y \to y_0} G(x, y)) $
$$ \lim_{y \to y_0} A(y) = \lim_{x \to x_0} B(x) $$
- $G(x, y) \xrightarrow[x \to x_0]{y} A(y)$
$\searrow_{y \to y_0} \quad \quad \searrow_{y \to y_0}$
$B(x) \xrightarrow[x \to x_0]{} C$

то, что выше дано, ниже - надо
### Доказательство
$\forall \varepsilon > 0 \quad \exists \delta > 0 : \forall x_1, x_2 \in U_\delta (x_0) \quad \forall y \in Y \quad |G(x_1, y) - G(x_2, y)| < \varepsilon$
$$ \downarrow y \to y_0 $$

---

## Page: page_14.png

# Заголовок лекции
## §
### 
$$
\exists c = \lim_{x \to x_0} B(x) \leftarrow |B(x_1) - B(x_2)| \le \varepsilon
$$
по кр. Коши
$$
|A(y) - C| \le |A(y) - G(x, y)| + |G(x, y) - B(x)| + |B(x) - C| < \varepsilon.
$$
$$
x \in U(x_0) \le \frac{\varepsilon}{3} \le \frac{\varepsilon}{3} \quad x \in U(x_0)
$$
Ч.т.д.
### Теорема (о предельном переходе в ИЗоП)
Пусть $f(x, y)$, $x \in [a, \omega)$, $y \in Y$, $y_0 \in \lim Y$.
$$
[a, 3]
$$
Если 1) $f(x, y) \xrightarrow[y \to y_0]{} f(x) \quad \forall x \in [a, \omega) $
2) $\int_a^\omega f(x, y) dx$ сходится равномерно на $y$.

Тогда $\lim_{y \to y_0} \int_a^\omega f(x, y) dx = \int_a^\omega \lim_{y \to y_0} f(x, y) dx$.
### D-bo:
$\lim_{y \to y_0} \int_a^\omega f(x, y) dx = \lim_{y \to y_0} (\lim_{b \to \omega-0} \int_a^b f(x, y) dx) \stackrel{?}{=} $
$$
\lim_{b \to \omega-0} (\lim_{y \to y_0} \int_a^b f(x, y) dx) = \lim_{b \to \omega-0} \int_a^b \lim_{y \to y_0} f(x, y) dx.
$$
$$
\uparrow \quad b \to \omega -0 \quad \text{и} \quad y \to y_0
$$
непр. у оп. 1
(т.к. $f(x, y) \xrightarrow[y \to y_0]{} f(x)$)
Ч.т.д.

# 15.02.24
## §
### Теорема (о непр-ти ИЗоП)
Пусть $f(x, y)$, $x \in [a, \omega)$, $y \in [c, d]$, $f \in C([a, \omega) \times [c, d])$ и $\int_a^\omega f(x, y) dx$ сх-ся равномерно на $Y = [c, d]$. Тогда $F(y) = \int_a^\omega f(x, y) dx$ непр. на $[c, d]$.
### D-bo:
1) $F(b, y) = \int_a^b f(x, y) dx$, $b \in [a, \omega)$, $F(b, y)$ непр. по $y \in [c, d]$ (по т.о. непр-ти ИЗоП, т.к. $|f(x, y)| \le C_b < \infty \quad \forall x \in [a, b], \quad \forall y \in [c, d]$).
2) $F(b, y) \xrightarrow[[c, d]]{b \to \omega - 0} F(y) \Rightarrow F(y)$ непр. ф-ия.


---

## Page: page_15.png

# Пример

## §

### Пример:
$I(y) = \int_0^\infty e^{-xy} \frac{\sin x}{x} dx$, $y > 0$. *Интеграл Дирихле.*
Докажем, что $I \in C([0, +\infty))$, $\lim_{y \to +\infty} I(y) = 0$, $\lim_{y \to 0+} I(y) = \int_0^{+\infty} \frac{\sin x}{x} dx = \frac{\pi}{2}$.

*Доказать, что* $d > 0$. Тогда по пред-ей теореме: $e^{-xy} \frac{\sin x}{x} \in C([0; +\infty) \times [0; d])$ и $\int_0^\infty e^{-xy} \frac{\sin x}{x} dx$ сходится равномерно на $[0, d]$, т.к. *d-произв.*, то $I(y)$ непрерывна на $[0; +\infty)$.

$\lim_{y \to +\infty} I(y) \stackrel{?}{=} \int_0^\infty \lim_{y \to +\infty} e^{-xy} \frac{\sin x}{x} dx = \int_0^\infty 0 dx = 0$.
1) $e^{-xy} \frac{\sin x}{x} \xrightarrow[y \to +\infty]{[0, d]} 0, \forall d > 0$.
2) $\int_0^\infty e^{-xy} \frac{\sin x}{x} dx$ сходится равномерно на $[0; +\infty)$.

$\sup_{x \in [0; d]} e^{-xy} |\frac{\sin x}{x}| = 1 \stackrel{:}{=}$ *Все срабатывает, т.к.* $\sup_{x \in [1; d]} e^{-xy} |\frac{\sin x}{x}| \le e^{-y} \xrightarrow[y \to +\infty]{} 0$

$\lim_{y \to +\infty} I(y) = \lim_{y \to +\infty} \int_0^1 e^{-xy} \frac{\sin x}{x} dx + \lim_{y \to +\infty} \int_1^\infty e^{-xy} \frac{\sin x}{x} dx$.
$|e^{-xy} \frac{\sin x}{x}| < 1$

$=\int_1^\infty \lim_{y \to +\infty} e^{-xy} \frac{\sin x}{x} dx = 0$

Вычислим $I(y)$ методом *диф-ия* по параметру.
$\frac{d}{dy} I(y) = \frac{d}{dy} \int_0^\infty e^{-xy} \frac{\sin x}{x} dx = \int_0^\infty \frac{\partial}{\partial y} (e^{-xy}) \frac{\sin x}{x} dx = \int_0^\infty -x e^{-xy} \frac{\sin x}{x} dx = -\int_0^\infty e^{-xy} \sin x dx = \frac{-1}{1+y^2}$ (*инт. по частям*)

Т.о. $I'_y = \frac{-1}{1+y^2} \Rightarrow I(y) = -\int \frac{dy}{1+y^2} + C = -\arctan y + C$
$I(+\infty) = 0 = -\frac{\pi}{2} + C \Rightarrow C = \frac{\pi}{2}$

$I(y) = \frac{\pi}{2} - \arctan(y)$, $y > 0$ $I(0) = \frac{\pi}{2}$

Диф-ие справедливо по т. о диф. ИЗоП, т.к. $\forall y_0 > 0$
$$
\begin{aligned}
& \left| \frac{\partial}{\partial y} (e^{-xy} \sin x) \right| = |e^{-xy} \sin x| \le e^{-x(y_0 - \varepsilon)} \\
& \int_0^\infty e^{-x(y_0 - \varepsilon)} dx < \infty.
\end{aligned}
$$

---

## Page: page_16.png

# Теорема (о диф-ии нИЗоП)
- Пусть $f(x, y)$, $x \in [a, \omega)$, $y \in [c, d]$; $f$, $\frac{\partial f}{\partial y} \in C([a, \omega) \times [c, d])$, и интеграл $\int_a^\omega \frac{\partial f}{\partial y}(x, y) dx$ сходится равномерно на $[c, d]$, и интеграл $\int_a^\omega f(x, y) dx$ сходится хотя бы в одной точке $y$. Тогда $F(y) = \int_a^\omega f(x, y) dx$ диф-ма на $(c, d)$ и $\frac{dF}{dy} = \int_a^\omega \frac{\partial f}{\partial y}(x, y) dx$.

Д-во: Пусть $F(b, y) = \int_a^b f(x, y) dx$
$F(b, y)$ диф-ма по $y \in (c, d)$ по т. о дифф-ти ИЗоП и $\frac{\partial F}{\partial y}(b, y) = \int_a^b \frac{\partial f}{\partial y}(x, y) dx$.

Из условий следует, что:
1) $\frac{\partial F}{\partial y}(b, y) \underset{b \to \omega - 0}{\rightrightarrows} \int_a^\omega \frac{\partial f}{\partial y}(x, y) dx$ по [НРЗБ: равномерной] сходимости послед. ф-ий
2) $F(b, y) \underset{b \to \omega - 0}{\to} \int_a^\omega f(x, y) dx$ для некот. точки $y$.
$$\frac{d}{dy} \left( \int_a^\omega f(x, y) dx \right) = \int_a^\omega \frac{\partial f}{\partial y} dx$$

# Теорема (об [НРЗБ: счит.] нИЗоП)
- Пусть $f \in C([a, \omega) \times [c, d])$, и $\int_a^\omega f(x, y) dx$ сходится равномерно на $[c, d]$.
Тогда $F(y) = \int_a^\omega f(x, y) dx \in \Re[c, d]$ и $\int_c^d \left( \int_a^\omega f(x, y) dx \right) dy = \int_a^\omega \left( \int_c^d f(x, y) dy \right) dx$.

Доказательство: по т. Фубини $\forall b \in [a, \omega)$
$$\int_c^d \left( \int_a^b f(x, y) dx \right) dy = \int_a^b \left( \int_c^d f(x, y) dy \right) dx$$
при $b \to \omega - 0$:
$$\int_c^d \left( \lim_{b \to \omega - 0} \int_a^b f(x, y) dx \right) dy = \int_a^\omega \left( \int_c^d f(x, y) dy \right) dx$$
(из ради. сходимости: $\int_a^b f(x, y) dx \underset{b \to \omega - 0}{\rightrightarrows} \int_a^\omega f(x, y) dx$)
$$\int_c^d \left( \int_a^\omega f(x, y) dx \right) dy = \int_a^\omega \left( \int_c^d f(x, y) dy \right) dx$$

### Пример: Интегралы Френеля
$$\int_0^\infty \sin(x^2) dx = \int_0^\infty \cos(x^2) dx = \frac{1}{2} \sqrt{\frac{\pi}{2}}.$$
$$\int_0^\infty \sin(x^2) dx = \begin{cases} x^2 = t \\ x = \sqrt{t} \\ dx = \frac{dt}{2\sqrt{t}} \end{cases} = \frac{1}{2} \int_0^\infty \frac{\sin t}{\sqrt{t}} dt = \frac{1}{2} \lim_{b \to +\infty} \int_0^b \frac{\sin t}{\sqrt{t}} dt$$
$$\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}$$
$$\int_0^\infty e^{-tx^2} dx = \frac{1}{\sqrt{t}} \int_0^\infty e^{-(\sqrt{t}x)^2} d(\sqrt{t}x) = \frac{1}{\sqrt{t}} \frac{\sqrt{\pi}}{2}$$
$$\frac{1}{\sqrt{t}} = \frac{2}{\sqrt{\pi}} \int_0^\infty e^{-tx^2} dx$$
$$\int_0^b \frac{\sin t}{\sqrt{t}} dt = \int_0^b \sin t \left( \frac{2}{\sqrt{\pi}} \int_0^\infty e^{-tx^2} dx \right) dt = \frac{2}{\sqrt{\pi}} \int_0^\infty \left( \int_0^b e^{-tx^2} \sin t dt \right) dx =$$
[УПР-ИЕ]
$$= \frac{2}{\sqrt{\pi}} \int_0^\infty \left( \int_0^b e^{-tx^2} \sin t dt \right) dx$$


---

## Page: page_17.png

```markdown
# Заголовок лекции (Дата, Глава)
$$ \int_0^\infty \sin(t) e^{-tx^2} dt = \int_0^\infty e^{-tx^2} d(-\cos t) = -\cos t e^{-tx^2} \Big|_0^\infty + \int_0^\infty \cos t (-x^2) e^{-tx^2} dt = $$
$$ = 1 - \cos t e^{-tx^2} - x^2 \int_0^\infty e^{-tx^2} d\sin t = 1 - \cos \delta e^{-\delta x^2} - x^2 (\sin t e^{-tx^2} \Big|_0^\infty - $$
$$ - \int_0^\infty \sin t(-x^2) e^{-tx^2} dt) = 1 - e^{-\delta x^2} \cos \delta - x^2 e^{-\delta x^2} \sin \delta - x^4 I. $$
$$ I = \frac{1 - e^{-\delta x^2} (\cos \delta + x^2 \sin \delta)}{1 + x^4} $$
$$ \stackrel{\delta \to 0}{=} \frac{2}{\sqrt{\pi}} \int_0^{+\infty} \frac{1 - e^{-\delta x^2} (\cos \delta + x^2 \sin \delta)}{1 + x^4} dx \stackrel{b}{\leftarrow} \frac{2 + x^2}{1 + x^4} - \text{инт. на } \int_0^\infty \text{ м. Лебега} $$
$$ \Rightarrow \int_0^\infty \sin(x^2) dx = \lim_{\delta \to +\infty} \frac{1}{\sqrt{\pi}} \int_0^\infty \frac{1 - e^{-\delta x^2} (\cos \delta + x^2 \sin \delta)}{1 + x^4} dx = \frac{1}{\sqrt{\pi}} \int_0^\infty \frac{dx}{1 + x^4} = $$
$$ \begin{cases} \frac{1}{1 + x^4} = s \\ x = (\frac{1}{s} - 1)^{\frac{1}{4}} \\ dx = \frac{1}{4} (\frac{1}{s} - 1)^{-\frac{3}{4}} \cdot (-\frac{1}{s^2}) \end{cases} = \frac{1}{\sqrt{\pi}} \int_1^0 s \cdot \frac{1}{4} (\frac{1}{s} - 1)^{-\frac{3}{4}} (-\frac{1}{s^2}) ds = \frac{1}{4\sqrt{\pi}} \int_0^1 s^{\frac{1}{4}} (1 - s)^{-\frac{3}{4}} ds = $$
$$ = \frac{1}{4\sqrt{\pi}} B(\frac{3}{4}, \frac{1}{4}) = \frac{1}{4\sqrt{\pi}} \frac{\Gamma(\frac{3}{4}) \Gamma(\frac{1}{4})}{\Gamma(1)} = \frac{1}{4\sqrt{\pi}} \Gamma(\frac{1}{4}) \Gamma(1 - \frac{1}{4}) = \frac{1}{4\sqrt{\pi}} \frac{\pi}{\sin \frac{\pi}{4}} = $$
$$ = \frac{1}{2} \sqrt{\frac{\pi}{2}} $$
## § Свёртка.
$$ (f * g)(x) = \int_{\mathbb{R}^n} f(y - x) g(y) dy, y \in \mathbb{R}^n $$
### Пример: Ньютонов (Кулонов) потенциал
- распред. масса / заряд: $dm = \rho(x) dx$, $dq = \rho(x) dx$
- $d\varphi = \frac{dq(x)}{||x - y||}$, $d\varphi = \frac{dm}{||x - y||}$ - локальный потенциал
- расстояние (Евклидово)
$$ \varphi(y) = \int_V d\varphi(x) = \int_V \frac{\rho(x) dx}{||x - y||} = \int_{\mathbb{R}^n} \chi_v(x) \frac{\rho(x) dx}{||x - y||} $$
### Опр.
Функцию $f: \mathbb{R}^n \to \mathbb{C}$ наз. p-локально интегрируемой, $1 \le p < \infty$, если
$$ \forall x \in \mathbb{R}^n \quad \exists \text{ окр. } U(x_0): \quad \int_{U(x_0)} |f(x)|^p dx < \infty. $$
### Замечание
Эквивалентно:
$$ \forall K \subset \mathbb{R}^n \text{ (компакт) } \quad \int_K |f(x)|^p dx < \infty $$
### Обозн:
$$ L_{p, loc}(\mathbb{R}^n) $$
```

---

## Page: page_18.png

#  
Ясно, что $L_p(\mathbb{R}^n) \subset L_{p, loc}(\mathbb{R}^n)$.
## §
### Опр.
Пусть $f: \mathbb{R}^n \to \mathbb{C}$. Носителем ф-ии $f$ наз.-мн-во $supp \ f := \overline{cl \{x \in \mathbb{R}^n : f(x) \neq 0\}}$. (*замыкание*)

### Опр.
Функ. $f$ наз. *финитной*, если её носитель — это компакт в $\mathbb{R}^n$.

$C_0(\mathbb{R}^n)$ — мн-во непр. финитных ф-ий.

$C_0(\mathbb{R}^n) \subset L_p(\mathbb{R}^n)$
$\forall p \ge 1$

### Опр.
Пусть $f, g \in L_{1, loc}(\mathbb{R}^n)$, $E(f, g) = \{x \in \mathbb{R}^n : \text{ф-ия } y \mapsto f(x-y)g(y) \notin L_1(\mathbb{R}^n) \}$.
Тогда *сверткой* $f$ и $g$ наз. отображение:
$$(f * g)(x) = \begin{cases} \int_{\mathbb{R}^n} f(x-y)g(y) \ dy, \text{ если } x \notin E(f, g) \\ 0, \ x \in E(f, g) \end{cases}$$
$$\mathbb{I}$$
$$\int_{\mathbb{R}^n} |f(x-y)g(y)| \ dy = +\infty$$
# 19.02.24
## § Теорема (о простейших свойствах свертки)
Пусть $f, g \in L_{1, loc}(\mathbb{R}^n)$. Тогда

1) $f*g$ — измеримая отн. меры Лебега ф-ия.
2) $f \sim \tilde{f}$ и $g \sim \tilde{g} \Rightarrow E(f, g) = E(\tilde{f}, \tilde{g})$ и $f * g = \tilde{f} * \tilde{g}$.
3) $E(f, g) = E(g, f)$ и $\forall x \in \mathbb{R}^n (f*g)(x) = (g*f)(x)$.
4) Если $g \in C_0(\mathbb{R}^n)$, то $E(f, g) = \emptyset$, т.е. $(f*g)(x) = \int_{\mathbb{R}^n} f(x-y)g(y) \ dy \ \forall x \in \mathbb{R}^n$.

### Доказательство:
1) Пусть $f = \chi_A$, $g = \chi_B$, $A, B$ — измеримые отк. меры $\lambda$.
$$(f * g)(x) = \int_{\mathbb{R}^n} \chi_A(x-y) \chi_B(y) \ dy = \int_{\mathbb{R}^n} \chi_{x-A}(y) \chi_B(y) \ dy = \int_{\mathbb{R}^n} \chi_{B \cap (x-A)}(y) \ dy = \lambda(B \cap x-A) -$$
$x \in \mathbb{R}^n$ *фикс.*
$$\chi_A(x-y) = \begin{cases} 1, x-y \in A \Leftrightarrow y \in x-A := \{x-z, z \in A\} \\ 0, y \notin x-A \end{cases}$$
измеримая ф-ия по $x \in \mathbb{R}^n$.

2) $x \notin E(f, g) \Leftrightarrow (f*g)(x) = \int_{\mathbb{R}^n} f(x-y)g(y) \ dy = \int_{\mathbb{R}^n} \tilde{f}(x-y)\tilde{g}(y) \ dy = (\tilde{f}*\tilde{g})(x) \Rightarrow x \notin E(\tilde{f}, \tilde{g})$
$$\Rightarrow E(f, g) = E(\tilde{f}, \tilde{g}) \text{ и } (f*g)(x) = (\tilde{f}*\tilde{g})(x)$$
3) $x \notin E(f, g) \ (f*g)(x) = \int_{\mathbb{R}^n} f(x-y)g(y) \ dy =$
$$\begin{cases} z = x-y = \varphi_x(y) : \mathbb{R}^n \to \mathbb{R}^n \\ (\varphi_x)'_y = -I, |det(\varphi_x)'_y| = 1 \\ y = x-z \end{cases} =$$
$$= \int_{\mathbb{R}^n} f(z)g(x-z) \ dz = (g * f)(x)$$
$$\Rightarrow x \in E(g, f) \ \Rightarrow E(f, g) = E(g, f) \text{ и } \forall x \in \mathbb{R}^n \ (f*g)(x) = (g*f)(x).$$
4) Пусть $g \in C_0(\mathbb{R}^n)$, т.е. $supp \ g \subset \mathbb{R}^n$
$$\int_{\mathbb{R}^n} |f(x-y)g(y)| \ dy = \int_{supp \ g} |f(x-y)g(y)| \ dy \le \underbrace{max_{y \in supp \ g} |g(y)|}_{N_g} \cdot \int_{supp \ g} |f(x-y)| \ dy =$$

---

## Page: page_19.png

$$
\begin{cases}
x - y = z \\
dy = dz
\end{cases} = M_g \iint f(z) dz < \infty \quad \text{т.к.} \quad f \in L_{1, loc}(\mathbb{R}^n)
$$
$x - \text{supp} \subset \mathbb{R}^n$

#
## Неравенство Юнга для свёртки
###
Пусть $1 \le p, q, r \le \infty: \frac{1}{p} + \frac{1}{q} = 1 + \frac{1}{r}$. Тогда если $f \in L_p(\mathbb{R}^n), g \in L_q(\mathbb{R}^n)$, то $\lambda(E(f,g)) = 0$ и $f*g \in L_r(\mathbb{R}^n)$, кроме того, будет выполнено неравенство:
$$
\|f * g\|_r \le \|f\|_p \cdot \|g\|_q
$$

### Доказательство:
1) $r = \infty$; $\frac{1}{p} + \frac{1}{q} = 1$
$$
\left| \int_{\mathbb{R}^n} f(x-y) g(y) dy \right| \underset{\text{н-во}}{\le} \left(\int_{\mathbb{R}^n} |f(x-y)|^p dy\right)^{\frac{1}{p}} \cdot \left(\int_{\mathbb{R}^n} |g(y)|^q dy\right)^{\frac{1}{q}} = \|f\|_p \cdot \|g\|_q
$$
Гельдера
$$
E(f, g) = \phi \quad \text{и} \quad \|f * g\|_\infty \le \|f\|_p \cdot \|g\|_q
$$

2) __Предположение__ (вспомог. нер-во)

1° $\|f\|_p = \sup_{\substack{g \in L_q(\mathbb{R}^n) \\ \|g\|_q = 1}} \left| \int_{\mathbb{R}^n} f(y)g(y) dy \right|$ (будем д-но на функц. анализе)

2° $(\Omega, \mu)$, $(Y, \nu)$ — пр-ва с конечной мерой, $h: \Omega \times Y \to \mathbb{C}$. Тогда
$$
\left(\int_\Omega \left| \int_Y h(x,y) d\nu(y) \right|^p d\mu(x) \right)^{\frac{1}{p}} \le \int_Y \left( \int_\Omega |h(x,y)|^p d\mu(x) \right)^{\frac{1}{p}} d\nu(y)
$$
Нер-во Минковского

__Д-во (нер-ва Минковского):__
$$
\varphi(x) = \int_Y h(x, y) d\nu(y)
$$
Тогда $\| \varphi \|_p = \int_\Omega |\varphi(x)|^p d\mu(x)$. Возьмем $g \in L_q(\mathbb{R}^n)$
$$
\int_\Omega \varphi(x) g(x) d\mu(x) = \int_\Omega \left( \int_Y h(x,y) d\nu(y) \right) g(x) d\mu(x) \underset{\text{т. Фубини}}{=} \int_Y \left( \int_\Omega h(x,y) g(x) d\mu(x) \right) d\nu(y) \le
$$
$$
\le \int_Y \left( \int_\Omega |h(x,y)|^p d\mu(x) \right)^{\frac{1}{p}} \cdot \left( \int_\Omega |g(x)|^q d\mu(x) \right)^{\frac{1}{q}} d\nu(y) = \int_Y \left( \int_\Omega |h(x,y)|^p d\mu(x) \right)^{\frac{1}{p}} d\nu(y)
$$
н-во
$$
\| \varphi \|_p \underset{\substack{g \in L_q(\mathbb{R}^n) \\ \|g\|_q = 1}}{=} \sup \left| \int_\Omega \varphi(x) g(x) d\mu(x) \right| \le \int_Y \left( \int_\Omega |h(x,y)|^p d\mu(x) \right)^{\frac{1}{p}} d\nu(y)
$$
Енсен[НРЗБ]
нер-во Минковского д-ко.


---

## Page: page_2.png

# Доказательство:
$$\frac{\partial F}{\partial y_j}(y_0) = \lim_{t \to 0} \frac{F(y_0 + te^j) - F(y_0)}{t} = \lim_{\substack{h \to \infty \\ t_n \to 0}} \frac{F(y_0 + t_n e^j) - F(y_0)}{t_n}$$
$$e^j = (0, ..., 0, \underset{j}{\overset{\uparrow}{1}}, 0, ..., 0) \quad \forall t_n \to 0$$
$$= \lim_{\substack{h \to \infty \\ t_n \to 0}} \frac{1}{t_n} \left( \int_A f(x, y_0 + t_n e^j) d\mu(x) - \int_A f(x, y_0) d\mu(x) \right) =$$
$$= \lim_{\substack{h \to \infty \\ t_n \to 0}} \int_A \frac{f(x, y_0 + t_n e^j) - f(x, y_0)}{t_n} d\mu(x) = \left| \begin{array}{c} \text{выносим предел под} \\ \text{знак} \int \end{array} \right| = \int_A \lim_{\substack{h \to \infty \\ t_n \to 0}} \frac{f(x, y_0 + t_n e^j) - f(x, y_0)}{t_n} d\mu(x) = $$
$$= \int_A \frac{\partial f}{\partial y_j}(x, y_0) d\mu(x).$$
$\frac{\partial f}{\partial y_j}(x, y_0)$ сущ. для п.в. $x \in A$, т.е. $\exists$ мн-во $A_{y_0} \subset A$: $\mu(A_{y_0}) = \mu(A)$ и
$$\forall x \in A_{y_0} \quad \lim_{\substack{h \to \infty \\ t_n \to 0}} \frac{f(x, y_0 + t_n e^j) - f(x, y_0)}{t_n} = \frac{\partial f}{\partial y_j} (x, y_0)$$
$$\varphi(x, y_n) = \frac{f(x, y_0 + t_n e^j) - f(x, y_0)}{t_n} = \frac{t_n \cdot \frac{\partial f}{\partial y_j} (x, y_0 + \Theta e^j)}{t_n}$$
? вып. ли равенство для п.в. $x \in A$?
$$\exists \Theta \in (0, t_n)$$
ш. Лагранжа
Рассм. $b(t) = f(x, y_0 + t e^j)$, $b'(t) = \frac{\partial f}{\partial y_j} (x, y_0 + t e^j)$
Для каких $x$ этот объект сущ.?
$$\text{для} \quad x \in A_{y_0 + t e^j}$$
?
и $\mu(A_{y_0} + t e^j) = \mu(A)$
по усл. 2) $|\varphi(x, y_n)| \le g(x)$ для п.в. $x \in A$
$$\forall y_n \in U(y_0)$$
Примеры: 1) $F(y) = \int_0^\infty \frac{dx}{x+y}$, $y > 0$; $F'(y) = \int_0^\infty \left( \frac{1}{x+y} \right)'_y dx =$
$$= \left. \frac{1}{x+y} \right|_{x=0}^{x=\infty} = -\frac{1}{y}$$

Чит.
$$ = - \int_0^\infty \frac{1}{(x+y)^2} dx =$$
$$\begin{array}{|l|l|} \hline \text{Пример:} & 1) \quad F(y) = \int_0^{+\infty} \frac{dx}{x+y}, \quad x > 0. \\ \hline F'(y) = \int_0^{+\infty} \left( \frac{1}{x+y} \right)'_y dx = \int_0^{+\infty} -\frac{1}{(x+y)^2} dx & \left. \frac{1}{x+y} \right|_{x=0}^{x=+\infty} = -\frac{1}{y} \\ \hline \text{Но} \quad F(y) = +\infty & \\ \hline \left. \ln(x+y) \right|_{x=0}^{x=+\infty} = \ln \left( \frac{a+y}{y} \right) \underset{a \to +\infty}{\longrightarrow} +\infty & \\ \hline \end{array}$$

---

## Page: page_20.png

# Заголовок лекции
$$\frac{1}{r} \ne \infty, \frac{1}{p} + \frac{1}{q} = 1 + \frac{1}{r} \Rightarrow \frac{1}{p} \ge \frac{1}{r}, \frac{1}{q} \ge \frac{1}{r} \Rightarrow p \le r, q \le r$$
$$1 \le p, q, r$$
$$\frac{1}{q} + \frac{1}{q'} = 1, \text{где } \frac{1}{q'} = \frac{1}{p} - \frac{1}{r} = \frac{r-p}{r \cdot p}, q' = \frac{r \cdot p}{r-p} = \frac{p}{1 - \frac{p}{r}} = \frac{p}{\lambda}$$
Введем параметр $\lambda = 1 - \frac{p}{r} \in [0, 1]$
Пусть $h(x) = \int_{\mathbb{R}^n} f(x-y) g(y) dy$
$$|h(x)|^q = \left|\int_{\mathbb{R}^n} f(x-y) g(y) dy\right|^q \le \left(\int_{\mathbb{R}^n} |f(x-y)| |g(y)| dy\right)^q = \left(\int_{\mathbb{R}^n} |f(x-y)|^{1 - \lambda} |f(x-y)|^{\lambda} |g(y)| dy\right)^q \le$$
$$\le \left(\int_{\mathbb{R}^n} |f(x-y)|^{q'} dy\right)^{\frac{q}{q'}} \left(\int_{\mathbb{R}^n} |f(x-y)|^{\lambda q} |g(y)|^q dy\right) = \left(\int_{\mathbb{R}^n} |f(z)|^p dz\right)^{\frac{q}{q'}} \int_{\mathbb{R}^n} |f(x-y)|^{\lambda q} |g(y)|^q dy \le$$
$$\le ||f||_p^{\frac{pq}{r}} \int_{\mathbb{R}^n} |f(x-y)|^{\lambda q} |g(y)|^q dy$$
$$s = \frac{r}{q} \ge 1$$
$$|h(x)|^r = |h(x)|^{q \cdot s} \le ||f||_p^{\frac{pq}{r} s} \left(\int_{\mathbb{R}^n} |f(x-y)|^{\lambda q} |g(y)|^q dy\right)^s$$
$$\left(\int_{\mathbb{R}^n} |h(x)|^r dx\right)^{\frac{1}{r}} \le ||f||_p^{\lambda} \cdot \left(\int_{\mathbb{R}^n} \left(\int_{\mathbb{R}^n} |f(x-y)|^{\lambda q} |g(y)|^q dy\right)^s dx\right)^{\frac{1}{r}} \le \frac{1}{r} \le$$
$$\le ||f||_p^{\lambda} \left(\int_{\mathbb{R}^n} |g(y)|^q \left(\int_{\mathbb{R}^n} |f(x-y)|^{\lambda q s} dx\right)^{\frac{1}{s}} dy\right)^{\frac{1}{q}} =$$
$$\le ||f||_p^{\lambda} ||g||_q ||f||_p^{\frac{\lambda q}{r}} = ||f||_p^{\lambda} ||f||_p^{1 - \lambda} ||g||_q = ||f||_p ||g||_q$$
$$||h||_r \le ||f||_p ||g||_q \Rightarrow h \text{- п.в. } \text{конечно} \Rightarrow \lambda(E\{S, g\}) = \lambda(\{x \in \mathbb{R}^n: |h| = \pm \infty\}) = 0$$
$$\text{или не сущ.}$$
*Чтд.*

Следствие: $L_1(\mathbb{R}^n)$ с операцией умножения в виде свертки - это Банахова ассоциативная алгебра без единицы.
*До-во:* $*: L_1(\mathbb{R}^n) \times L_1(\mathbb{R}^n) \to L_1(\mathbb{R}^n)$ (из неравенства Юнга)
$p = q = r = 1.$

*Ассоц-ть:* $(f * g) * h = f * (g * h)$ - по т. Фубини

*Банах-ть:* из неравенства Шига


---

## Page: page_21.png

# Лекция (Обыкновенные дифференциальные уравнения)
## § [НРЗБ]
### Теорема (о непрерывности)
Пусть $f \in L_p(\mathbb{R}^n)$, $g \in L_q(\mathbb{R}^n)$, где $\frac{1}{p} + \frac{1}{q} = 1$, $1 \le p, q \le \infty$. Тогда свертка $f * g$ - ограничена и равномерно непрерывная функция на $\mathbb{R}^n$.

*Доказательство*: Из неравенства Юнга $\Rightarrow f * g \in L_\infty(\mathbb{R}^n)$. Равномерная непрерывность будет следовать из теоремы Соболева.

### Теорема (Соболева о непрерывности в целом в $L_p$)
Пусть $f \in L_p(\mathbb{R}^n)$, тогда
$$ \lim_{y \to 0} \int_{\mathbb{R}^n} |f(x-y) - f(x)|^p dx = 0 $$
Если $f \in L_{p, loc}(\mathbb{R}^n)$, то $\forall$ компакт $B \subset \mathbb{R}^n$
$$ \lim_{y \to 0} \int_B |f(x-y) - f(x)|^p dx = 0 $$
*Доказательство будем потом*.

Надо: $\forall \varepsilon > 0 \ \exists \delta > 0: \ \forall x, y \in \mathbb{R}^n \ \|x - y\| < \delta \Rightarrow |h(x) - h(y)| < \varepsilon$
$$ h(x) = \int_{\mathbb{R}^n} f(x-y)g(y) dy $$
Имеем: $\forall \varepsilon > 0 \ \exists \delta > 0: \ \forall y \in \mathbb{R}^n: \ \|y\| < \delta \Rightarrow \| f(x-y) - f(x) \|_{L^p} < \varepsilon^{\frac{1}{p}}$
Возьмем $\delta = \delta(\frac{\varepsilon}{\|g\|_{L^q}})$
$$ \forall \|t\| < \delta \ |h(t+x) - h(x)| = \left| \int_{\mathbb{R}^n} f(t+x-y)g(y) dy - \int_{\mathbb{R}^n} f(x-y)g(y) dy \right| \le $$
$$ \le \int_{\mathbb{R}^n} |f(x+t-y) - f(x-y)| \cdot |g(y)| dy \le \left( \int_{\mathbb{R}^n} |f(x+t-y) - f(x-y)|^p dy \right)^{\frac{1}{p}} \|g\|_{L^q} \le \frac{\varepsilon}{\|g\|_{L^q}} \|g\|_{L^q} = \varepsilon $$
Неравенство
Гельдера
$$ \left( \int_{\mathbb{R}^n} |f(z+t) - f(z)|^p dz \right)^{\frac{1}{p}} \le \frac{\varepsilon}{\|g\|_{L^q}} $$
Ч.т.д.

# 22.02.24
### Теорема (о дифференцировании свертки)
Пусть $f \in L_1(\mathbb{R}^n)$, $g \in C_0^{(m)}(\mathbb{R}^n)$, $m > 1$. Тогда свертка $f * g \in C^{(m)}(\mathbb{R}^n)$ и $D^\alpha(f * g)(x) = (f * D^\alpha g)(x)$.

*Доказательство*: напомним, что
$$ C_0^{(m)}(\mathbb{R}^n) = \{ g: \mathbb{R}^n \to \mathbb{C}, \underset{\text{носитель}}{\operatorname{supp}} g \subset \mathbb{R}^n \text{ и } D^\alpha g \in C(\mathbb{R}^n) \} $$
$$ |\alpha| \le m \text{ (имеет все частные производные (испр.) до } m \text{ порядка)} $$
Надо показать, что
$$ D_x^\alpha \left( \int_{\mathbb{R}^n} f(y)g(x-y) dy \right) = \int_{\mathbb{R}^n} f(y) D_x^\alpha g(x-y) dy $$

---

## Page: page_22.png

```markdown
# Заголовок лекции
## §

т.к. $D_x^\alpha = (\frac{\partial}{\partial x_n})^{\alpha_n}...(\frac{\partial}{\partial x_2})^{\alpha_2}(\frac{\partial}{\partial x_1})^{\alpha_1}$, то по т. о дифф. ИЗоП достаточно показать, что $\forall |p| \le m$ $|D_x^\alpha g(x-y)| \le \tilde{g}_p(y)$ и $\int_{\mathbb{R}^n} |f(y) \cdot \tilde{g}_p(y)| dy < \infty$

$$g(z):$$
[Рисунок графика функции g(z)] $\mathbb{R}$

$-\text{supp } g-$

$\Rightarrow$

$$D_x^\alpha:$$
[Рисунок графика функции D_x^\alpha] $M_p$
$|D_x^3 g(z)| \le M_p := \tilde{g}_p(z)$

$\text{supp } D_x^\alpha g \subset \text{supp } g$
$\forall p$

## Аппроксимативная единица

### Опр.
Семейство функций $\{\Delta_\alpha\}_{\alpha \in A}$ наз. $\delta$-образным семейством при $\alpha \to \alpha_0$, $\alpha_0 \in \text{Lim }A$, или аппроксимативной единицей, если:
- 1) $\Delta_\alpha(x) \ge 0$ $\forall x \in \mathbb{R}^n$, $\forall \alpha \in A$
- 2) $\int_{\mathbb{R}^n} \Delta_\alpha(x) dx = 1$
- 3) $\forall$ окр-ти нуля $U$ в $\mathbb{R}^n$
$$\lim_{\alpha \to \alpha_0} \int_U \Delta_\alpha(x) dx = 1$$

### Примеры:
1) $\Delta_h(x) = \frac{1}{h} \mathbb{I}_{[-\frac{h}{2}; \frac{h}{2}]}$, $h > 0$ - $\delta$-образное семейство при $h \to 0+$
[Рисунок графика функции Delta_h(x)]
- 1) $\Delta_h(x) > 0$
- 2) $\int_{\mathbb{R}^n} \Delta_h(x) dx = 1$
- 3) $\forall \varepsilon_1, \varepsilon_2 > 0$ для окр. $U = (-\varepsilon_1; \varepsilon_2)$

$\exists h_0 > 0: \forall h < h_0 \quad \text{supp } \Delta_h = [-\frac{h}{2}; \frac{h}{2}]$

тогда $\int_U \Delta_h(x) dx = \int_{\text{supp } \Delta_h} \Delta_h(x) dx = 1$

2) $\Delta_y(x) = \frac{1}{\pi} \frac{y}{y^2 + x^2}$, $y>0$ - $\delta$-образное семейство при $y \to 0+$
[Рисунок графика функции Delta_y(x)]
- 1) $\Delta_y(x) > 0$
- 2) $\int_{\mathbb{R}} \Delta_y(x) dx = \frac{1}{\pi} \int_{\mathbb{R}} \frac{y}{y^2 + x^2}dx =  \frac{1}{\pi} \arctan \frac{x}{y} |_{-\infty}^{+\infty} = 1$
- 3) $\int_{-\varepsilon_1}^{\varepsilon_2} \Delta_y(x) dx = \frac{1}{\pi} \int_{-\varepsilon_1}^{\varepsilon_2} \frac{y}{y^2 + x^2}dx = \begin{cases} \frac{x}{y} = t \end{cases} = \frac{1}{\pi} \int_{-\frac{\varepsilon_1}{y}}^{\frac{\varepsilon_2}{y}} \frac{dt}{1 + t^2} = \frac{1}{\pi} \arctan|_{-\frac{\varepsilon_1}{y}}^{\frac{\varepsilon_2}{y}} \underset{y \to 0 +}{\longrightarrow} = 1$

$\varepsilon_1, \varepsilon_2 > 0$
```

---

## Page: page_23.png

# Заголовок лекции

## §

### Опр. δ-образное семейство, порожденное функцией $w$:
Пусть $w: \mathbb{R}^n \to \mathbb{R}$
- 1) $w(x) \ge 0$
- 2) $supp \ w(x) = B(0, 1)$
- 3) $\int_{\mathbb{R}^n} w(x) dx = 1$

Тогда $\Delta_\varepsilon(x) = \frac{1}{\varepsilon^n} w(\frac{x}{\varepsilon})$ - $\delta$-образное семейство при $\varepsilon \to 0+$

- 1) $\Delta_\varepsilon(x) > 0$, т.к. $w>0$ и $\varepsilon > 0$.
- 2) $\int_{\mathbb{R}^n} \Delta_\varepsilon(x) dx = \int_{\mathbb{R}^n} \frac{1}{\varepsilon^n} w(\frac{x}{\varepsilon}) dx = \begin{cases} t = \frac{x}{\varepsilon} \\ dt = \frac{dx}{\varepsilon^n} \end{cases} = \int_{\mathbb{R}^n} w(t) dt = 1$.
- 3) $\forall$ Окр. $U$ точки $0$ в $\mathbb{R}^n$
$$ \lim_{\varepsilon \to 0+} \int_U \Delta_\varepsilon(x) dx = \lim_{\varepsilon \to 0+} \int_{supp \Delta_\varepsilon(x)} \Delta_\varepsilon(x) dx = 1.$$
Заметим, что $\Delta_h$ из ①: $\Delta_h(x) = \frac{1}{2 \varepsilon} w(\frac{x}{\varepsilon})$ для $\varepsilon = \frac{h}{2}$ $\omega =$ [график]

### Пример гладкой ф-ии $\omega$ ("шапочка Соболева")
$$f(x) = \begin{cases} e^{-\frac{1}{x}}, x > 0 \\ 0, x \le 0 \end{cases} \in C^\infty(\mathbb{R})$$
[график]
$$w(x) = c \cdot f(1 - ||x||^2) \in C_0^\infty(\mathbb{R}^n)$$
Ясно, что $w \ge 0$
если $||x|| > 1$, то $f = 0 \Rightarrow supp \ w = B(0, 1)$
$$\int_{\mathbb{R}^n} w(x) dx = c \int_{\mathbb{R}^n} f(1 - ||x||^2) dx = 1$$
[график]

для интереса: $(e^{-x^2})'' = (2xe^{-x^2})' = 2e^{-x^2} - 4x^2 e^{-x^2} = e^{-x^2} (4x^2 + 2)$
[график]
мексиканская шляпа

### Пример (среднее по Стеклову)
Пусть $f \in L_1(\mathbb{R})$, $(f * \Delta_h)(x) = \int_{\mathbb{R}} f(x-y) \Delta_h(y) dy = \frac{1}{h} \int_{-\frac{h}{2}}^{\frac{h}{2}} f(x-y) dy$
$$\Delta_h(x) = \frac{1}{h} \chi_{[-\frac{h}{2}; \frac{h}{2}]}(x)$$
$\begin{cases} dy = -dt \\ x-y = t \\ y = x-t \end{cases} x - \frac{h}{2}$
$= -\frac{1}{h} \int_{x+\frac{h}{2}}^{x-\frac{h}{2}} f(t) dt + [НРЗБ]$


---

## Page: page_24.png

# Заголовок лекции
## §

$$ \Theta \frac{1}{h} \int_{x-\frac{h}{2}}^{x+\frac{h}{2}} f(t) dt = \begin{cases} x - \text{точка центр-ми} \\ \text{для } f \end{cases} = \frac{f(\xi)}{h} \cdot (x + \frac{h}{2} - (x-\frac{h}{2})) = f(\xi) $$
$$ \xi \in [x - \frac{h}{2}; x + \frac{h}{2}] $$
ш-о среднем
$$
\downarrow h \to 0
$$
$$ f(x) $$

### Теорема (о равномерном приближении сверткой)
Пусть $f: \mathbb{R}^n \to \mathbb{C}$ - огр. функция, рави. непр. на $E \subset \mathbb{R}^n$, и пусть $\{\Delta_\alpha\}_{\alpha \in A}$ - аппр. единица при $\alpha \to \alpha_0$.

Тогда $(f * \Delta_\alpha)(x) \xrightarrow{E}_{\alpha \to \alpha_0} f(x)$.
<Вне записи: *Еще нужно будет следить, $\forall x \in E \ \forall y \in \mathbb{R}^n$ чтобы $(x-y) \in E$*>

*До-во:* $f$ - рави. непр. на $E \Leftrightarrow \forall \varepsilon > 0 \ \exists \delta > 0$: $\forall x, y \in E: ||x - y|| < \delta \Rightarrow |f(x) - f(y)| < \varepsilon$

$\forall \varepsilon > 0 \ \forall x \in E \ |(f * \Delta_\alpha)(x) - f(x)| = |\int_{\mathbb{R}^n} f(x-y)\Delta_\alpha(y) dy - f(x) \cdot 1| = |\int_{\mathbb{R}^n} f(x-y)\Delta_\alpha(y) dy - f(x) \int_{\mathbb{R}^n} \Delta_\alpha(y) dy| =$

$= |\int_{\mathbb{R}^n} (f(x-y) - f(x))\Delta_\alpha(y) dy| \le \int_{\mathbb{R}^n} |f(x-y) - f(x)| \Delta_\alpha(y) dy = $

$= \int_V |f(x-y) - f(x)|\Delta_\alpha(y) dy + \int_{\mathbb{R}^n \setminus V} |f(x-y) - f(x)|\Delta_\alpha(y) dy$ (2)
Пусть $V \subset \mathbb{R}^n$ - окр. нуля, $V = B(0, \delta)$

$||x - y - x|| = ||y|| < \delta$
$\underbrace{\le M}_{\text{из огр-ти } f}$
$\le M \int_{\mathbb{R}^n \setminus V} \Delta_\alpha(y) dy$

$$ \overset{(2)}{\le} \varepsilon \underbrace{\int_V \Delta_\alpha(y) dy} + M \int_{\mathbb{R}^n \setminus V} \Delta_\alpha(y) dy = $$

$$ = \varepsilon - \varepsilon \int_{\mathbb{R}^n \setminus V} \Delta_\alpha(y) dy + M \int_{\mathbb{R}^n \setminus V} \Delta_\alpha(y) dy \xrightarrow{\alpha \to \alpha_0} 0 $$
$$ = \varepsilon + (M - 1) \int_{\mathbb{R}^n \setminus V} \Delta_\alpha(y) dy \le C\varepsilon \quad \forall x \in E $$

### Следствие:
Если $f$ - огр. и непр. в точке $x \in \mathbb{R}^n \Rightarrow (f * \Delta_\alpha)(x) \xrightarrow{\alpha \to \alpha_0} f(x)$

### Пример (гармонич. ф-ии в верхней полупл-ти)

### Опр.
Функция $f: \mathbb{R}^n \to \mathbb{R}$ наз. гармонической в области


---

## Page: page_25.png

# 26.02.24

$G \subset \mathbb{R}$, если $f \in C^{(2)}(G)$ и $\Delta f := \frac{\partial^2 f}{\partial x_1^2} + ... + \frac{\partial^2 f}{\partial x_n^2} = 0 \quad \forall x \in G$.

Пусть $G = \mathbb{R} \times \mathbb{R}_+ = \{ (x, y) \in \mathbb{R}^2: y > 0 \}$

$$
(*)
\begin{cases}
\Delta f(x, y) = 0 \quad \forall x, y \in G \\
f|_{\partial G} = f(x, 0) := g(x) \text{ – ограниченная и непрерывная }
\end{cases}
$$
*граница $G$*

Докажем, что $f(x, y) = (g * \Delta_y)(x)$, $\Delta_y(x) = \frac{1}{\pi} \frac{y}{x^2 + y^2}$, $y > 0$
$$
= \frac{1}{\pi} \int_{\mathbb{R}} \frac{g(x - z)y}{z^2 + y^2} dz = \frac{1}{\pi} \int_{\mathbb{R}} \frac{g(z) y}{(x - z)^2 + y^2} dz \text{ – формула Пуассона для задачи (*)}
$$
$$
\Delta f(x, y) = \frac{\partial^2}{\partial x^2} (g * \Delta_y) + \frac{\partial^2}{\partial y^2} (g * \Delta_y) = g * (\frac{\partial^2}{\partial x^2} \Delta_y) + g * (\frac{\partial^2}{\partial y^2} \Delta_y) = g * (\Delta (\Delta_y))
$$
\begin{cases}
\text{Упр.: 1) проверить } \Delta (\Delta_y) = \Delta (\frac{y}{x^2 + y^2}) = 0 \quad \forall (x, y) \ne (0, 0) \\
\text{2) проверить, что } y \frac{\partial^2}{\partial x^2} (\Delta_y) \text{ и } \frac{\partial^2}{\partial y^2} (\Delta_y) \text{ есть инт. машфанты.}
\end{cases}

$$
(g * \Delta_y)(x) \xrightarrow{y \to +0} g(x) \text{ по теореме.}
$$

## Теорема (о приближении в $L_p$ сверткой)
Пусть $f \in L_p (\mathbb{R}^n)$, $1 \le p < \infty$, пусть $\{\Delta_\alpha\}_{\alpha \in A}$ – $\delta$-образное семейство при $\alpha \to \alpha_0$. Тогда
$$
f * \Delta_\alpha \xrightarrow[ \alpha \to \alpha_0]{|| \cdot ||_p} f, \text{ м.е. } \lim_{\alpha \to \alpha_0} || (f * \Delta_\alpha)(x) - f(x)||_{L_p} = 0
$$
*Доказательство*: т.к. $f \in L_p(\mathbb{R}^n)$, $\Delta_\alpha \in L_1 (\mathbb{R}^n) \Rightarrow$ по нер-ву Юнга $\frac{1}{p} + \frac{1}{q} = 1 + \frac{1}{r}$, $\begin{aligned} q = 1 \\ r = p \end{aligned}$
$$
f * \Delta_\alpha \in L_p (\mathbb{R}^n)
$$
$$
\left( \int_{\mathbb{R}^n} |(f * \Delta_\alpha)(x) - f(x)|^p dx \right)^{1/p} = \left( \int_{\mathbb{R}^n} \left| \int_{\mathbb{R}^n} \Delta_\alpha(y) dy \right) f(x) |^p dx \right)^{1/p} =
$$
$$
= \left( \int_{\mathbb{R}^n} \left| \int_{\mathbb{R}^n} f(x - y) \Delta_\alpha(y) dy - \int_{\mathbb{R}^n} f(x) \Delta_\alpha(y) dy \right|^p dx \right)^{1/p} =
$$
$$
= \left( \int_{\mathbb{R}^n} \left| \int_{\mathbb{R}^n} (f(x - y) - f(x)) \Delta_\alpha(y) dy \right|^p dx \right)^{1/p} \le \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} |f(x - y) - f(x)|^p \Delta_\alpha(y) dx \right)^{1/p} dy
$$
*нер-во Мишковского*

---

## Page: page_26.png

$$
\int_{\mathbb{R}^n} \Delta_\varepsilon(y) \left( \int_{\mathbb{R}^n} |f(x-y) - f(x)|^p dx \right)^{\frac{1}{p}} dy \le \int_{B(0, \varepsilon)} \Delta_\varepsilon(y) \left( \int_{\mathbb{R}^n} |f(x-y) - f(x)|^p dx \right)^{\frac{1}{p}} dy + \underbrace{\int_{\mathbb{R}^n \setminus B(0, \varepsilon)} \Delta_\varepsilon(y) dy}_{\downarrow \varepsilon \to 0} \underbrace{\int_{\mathbb{R}^n} |f(x-y) - f(x)|^p dx}_{\substack{0 \\ \downarrow \varepsilon \to 0}}
$$
$$
+ \int_{\mathbb{R}^n \setminus B(0, \varepsilon)} \Delta_\varepsilon(y) (\dots) dy \le \sup_{||y|| < \varepsilon} \left( \int_{\mathbb{R}^n} |f(x-y) - f(x)|^p dx \right)^{\frac{1}{p}} \cdot \int_{B(\alpha, \varepsilon)} \Delta_\varepsilon(y) dy + 2||f||_p \int_{\mathbb{R}^n \setminus B(\alpha, \varepsilon)} \Delta_\varepsilon(y) dy
$$
$$
\underbrace{\int_{\mathbb{R}^n \setminus B(\alpha, \varepsilon)} \Delta_\varepsilon(y) dy}_{\downarrow \alpha \to 0}
$$
$$
\underbrace{2^p ||f||_p}_{(2)} \qquad < \varepsilon \text{ по т. Соболева очен. в целом} \qquad \underbrace{\int_{\mathbb{R}^n} \Delta_\varepsilon(y) dy}_{\downarrow \alpha \to 1}
$$
$$
|a + b|^p \le (|a| + |b|)^p = (2 \max(|a|, |b|))^p = 2^p \max(|a|^p, |b|^p) \le 2^p(|a|^p + |b|^p)
$$
$$
||f(x-y) - f(x)||_p \le ||f(x-y)||_p + ||f(x)||_p = 2||f||_p \qquad (2)
$$
## Следствие (§)
### Следствие (о плотности $C_0^\infty$ в $L_p$)
$\forall f \in L_p(G), \quad G \subset \mathbb{R}^n$ – открытое
$$
\forall \varepsilon > 0 \quad \exists \varphi \in C_0^\infty(G): ||\varphi - f||_p < \varepsilon.
$$
нахишение:
$$
\varphi \in C_0(G) \Leftrightarrow supp \ \varphi \subset G
$$
### Доказательство
1) Можно считать, что $f \in L_p(\mathbb{R}^n)$, рассмотрев вместо $f$ функцию $\tilde f = \begin{cases} f, x \in G \\ 0, x \notin G \end{cases} \quad f \in L_p(G) \Leftrightarrow \tilde f \in L_p(\mathbb{R}^n)$.
2) Приблизим $f \in L_p(\mathbb{R}^n)$ функциями с компак[НРЗБ: тными] носителями:
$$
g_m(x) = f(x) \cdot \chi_{B(0, m)}^{(x)}
$$
$$
||f - g_m||_p \xrightarrow{m \to \infty} 0 \quad \text{Ясно, что } supp \ g \subset B(0, m)
$$
$$
\lim_{m \to \infty} \int_{\mathbb{R}^n} |f(x) - g_m(x)|^p dx = \lim_{m \to \infty} \int_{\mathbb{R}^n} |f(x) - f(x)\cdot \chi_{B(0, m)}^{(x)}|^p dx =
$$
$$
= \lim_{m \to \infty} \int_{\mathbb{R}^n \setminus B(0, m)} |f(x)|^p dx = \lim_{m \to \infty} \int_{\mathbb{R}^n} |f(x)|^p \cdot \chi_{\mathbb{R}^n \setminus B(0, m)}^{(x)} dx = \int_{\mathbb{R}^n} \underbrace{\lim_{m \to \infty} |f(x)|^p \cdot \chi_{\mathbb{R}^n \setminus B(0, m)}^{(x)}}_{0} dx = 0
$$
по т. Лебега о мажор[НРЗБ: ной] схо[НРЗБ: димости]
$$
\le ||f||_p
$$
3) Возьмем $\omega$ – "шапочка" Соболева, и $\Delta_\varepsilon(x) = \frac{1}{\varepsilon^n} \omega(\frac{x}{\varepsilon})$ – аппроксим. единица при $\varepsilon \to 0+$.


---

## Page: page_27.png

# Заголовок лекции
$$||g_m - f||_p < \frac{\delta}{2} \\ ||g_m - g_m * w_\varepsilon ||_p < \frac{\delta}{2}$$
$\Rightarrow$
$$||f - g_m * w_\varepsilon||_p < \delta$$
$supp \ g_m * w_\varepsilon \subset (supp \ g_m)^\varepsilon = \bigcup_{x \in supp \ g_m} B(x, \varepsilon)$
из пред. теоремы при малых $\varepsilon > 0$
но comb $g_m * w_\varepsilon \in C_0^\infty (G)$.

[Рисунок с подписью supp $g_m$ внутри $G$]

**Теорема Соболева** (о непр-ти вцелом в $L_p$).
Пусть $f \in L_p(\mathbb{R}^n)$, тогда
$$\lim_{y \to 0} \int_{\mathbb{R}^n} |f(x-y) - f(x)|^p dx = 0$$
Доказательство:
1) Будем считать, что $supp f \subset \mathbb{R}^n$, т.к. любую функцию из $L_p(\mathbb{R}^n)$ можно приблизить ф-цией с компактным носителем.
$$||f(x-y) - f(x)||_p \le ||f(x-y) - g(x-y)||_p + ||g(x-y) - g(x)||_p + ||g(x) - f(x)||_p$$
по перем. *x*
$$\le \frac{\varepsilon}{3} \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \le \frac{\varepsilon}{3} \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \le \frac{\varepsilon}{3}$$
2) Пусть $f \in L_p(\mathbb{R}^n)$ и $supp \ f \subset B(0, r)$.
Зафиксируем $\varepsilon > 0$.
$\exists \vartheta = \vartheta(\varepsilon) > 0$: (1) $\forall E$ - измеримое, $\lambda(E) < \vartheta \Rightarrow \int_E |f(x)|^p dx < \frac{1}{3} \left( \frac{\varepsilon}{2} \right)^p$ (св-во абс. непр. инт. Лебега),
(инт. по Лебегу)
[Рисунок кольца с радиусами $r$ и $r + \delta$, ширина этого слоя $< \frac{\vartheta}{4}$]
$\Rightarrow$ (2) $\exists \delta_1 = \delta_1(\vartheta) > 0$: $\forall \delta < \delta_1$ $\lambda(B(0, r + \delta)) - \lambda(B(0, r)) < \frac{\vartheta}{4}$ (св-во непр-ти меры Лебега)
(3) $\exists$ компактное мн-во $E_\vartheta \subset B(0, r)$: $\lambda(B(0, r) \setminus E_\vartheta) < \frac{\vartheta}{4}$
*f* - непр. на $E_\vartheta$
[Рисунок множеств $B(0, r)$, $B(0, r + \delta_1)$, $E_\vartheta$, $E_\vartheta + y$, $||y|| < \delta_1$]

---

## Page: page_28.png

```markdown
#  
Пусть $\mathcal{K} = \int_{E_0 \cap E_0+y} |f(x-y) - f(x)|^p dx \le \sup_{z_1, z_2 \in E_0 \cap E_0+y} |f(z_1) - f(z_2)| \cdot \lambda(E_0 \cap E_0 + y)$

$f \in C(E_0)$ по (3); $f(x-y) \in C(E_0 + y)$
$\Rightarrow f(x-y) - f(x) \in C(E_0 \cap E_0 + y)$
$\|z_1 - z_2\| < \delta_1$

м.к. $f$ - *равномер.* *непр.* по $E_0 \cap E_0 + y$, то $\exists 0 < \delta_2 < \delta_1: \forall y: \|y\| < \delta_2$
$\omega_f(\delta_2) \cdot \lambda(B(0, r)) < \frac{\varepsilon^p}{3}$

$\omega_f(\delta_1)$ - колебание $f$ на $E_0 \cap E_0 + y$
м.е. $\mathcal{K} \le \frac{\varepsilon^p}{3}$.
$\forall y \in \mathbb{R}^n: \|y\| < \delta_2$

$\int_{\mathbb{R}^n} |f(x-y) - f(x)|^p dx = \int_{B(0, r+\delta_2)} |f(x-y) - f(x)|^p dx = \int_{B(0, r+\delta_2) \setminus B(0, r)} |f(x-y) - f(x)|^p dx + \int_{B(0, r)} |f(x-y) - f(x)|^p dx \le$

$x \notin B(0, r+\delta_2) \Rightarrow x \notin B(0, r) \Rightarrow f(x) = 0$
$x - y \notin B(0, r) \Rightarrow f(x-y) = 0$
$\mathcal{K} \le \frac{\varepsilon^p}{3}$

$\le 2^p \left( \int_{B(0, r+\delta_2) \setminus B(0, r)} |f(x-y)|^p dx + \int_{B(0, r)} |f(x)|^p dx \right) + \int_{B(0, r) \cap E_0 \cap E_0 + y} |f(x-y) - f(x)|^p dx + \int_{E_0 \cap E_0 + y} |f(x-y) - f(x)|^p dx \le$
$\le 2^p \left(2 \cdot \frac{1}{3} \left(\frac{\varepsilon}{2}\right)^p\right) + \frac{\varepsilon^p}{3} + 2^p \left(2 \cdot \frac{1}{3} \left(\frac{\varepsilon}{2}\right)^p\right) < \frac{5}{3}\varepsilon^p$

(м.к. $\lambda(B(0, r) \setminus (E_0 \cap E_0+y)) <$)
$\mathcal{K}$
//- ф-лы де Моргана
$\lambda((B(0, r) \setminus E_0) \cup (B(0, r) \setminus E_0 + y)) \le$
$\le \lambda(B(0, r) \setminus E_0) + \lambda(B(0, r) \setminus E_0 + y) \le \frac{3}{4} \varepsilon < \varepsilon$

$\frac{1}{4}$
$\lambda(B(0, r)) - \lambda(E_0 + y) + \lambda(B(0, r+\delta_2) \setminus B(0, r))$
$\frac{1}{4}$

### Замечание (о свертке мер)
Пусть $\mu, \nu$ - борелевские конечные меры в $\mathbb{R}^n$

$(f * g)(x) = \int_{\mathbb{R}^n} f(x-y) g(y) dy$, $f, g \in L_1(\mathbb{R}^n)$
```

---

## Page: page_29.png

#  
$$(\mu * \nu)(A) = \int_{\mathbb{R}^n} \mu(A-y) d\nu(y)$$
$$A \in \mathcal{B}(\mathbb{R}^n)$$
проверить, что $\mu * \nu = \nu * \mu$

## 
Гармонический анализ
(ряды и преобразование Фурье)

### Опр.
Нормированное пр-во $(X, || \cdot ||)$ наз. предгильбертовым, если над полем $\mathbb{R}$ или $\mathbb{C}$.

$||x|| = \sqrt{(x, x)}$, где $(\cdot, \cdot)$ - скалярное пр-ие на $X$, и.е.
1) $(x, y+z) = (x, y) + (x, z), \forall x, y, z \in X$
$(\alpha x, y) = \alpha(x, y)$
2) $(x, y) = \overline{(y, x)}$
3) $(x, x) \ge 0$ и $(x, x) = 0 \Leftrightarrow x = 0$.

### Опр.
Предгильбертово пр-во наз. гильбертовым, если оно полно относит. своей нормы $||x|| = \sqrt{(x, x)}$.

### Пример:
$L_2(G, \mu)$, $G$ - мн-во, $\mu$ - мера на $G$.
$$||f||_2 = \left( \int_G |f(x)|^2 d\mu(x) \right)^{\frac{1}{2}},$$
$$(f, g) = \int_G f(x) \overline{g(x)} d\mu(x).$$
Если $\mu(x) = \omega(x) dx$
вес, $L_2(G, \mu) = L_2(G, \omega dx)$
с весовое Г. пр-во

### Опр.
Вектор $x$ ортогонален $y$, $x, y \in \mathcal{H}$, $\mathcal{H}$ - г.п., если $(x, y) = 0$.
Обозн. $x \perp y$.

### Опр.
Семейство векторов $E = \{e_\alpha\}_{\alpha \in A}$ наз. ортогональным, если $\forall \alpha \ne \beta$ $e_\alpha \perp e_\beta$
- ортонормированным, если $\forall \alpha, \beta \in A$ $(e_\alpha, e_\beta) = \delta_{\alpha \beta} = \begin{cases} 1, \alpha = \beta \\ 0, \alpha \ne \beta \end{cases}$

не более, чем счетная система векторов

### Опр.
Пусть $E = \{e_\alpha\}_{\alpha \in A}$ - ортонорм. система в $\mathcal{H}$, $x \in \mathcal{H}$.
Величина $\lambda = (x, e_\alpha)$ наз. коэф. Фурье по системе $E$.

ред $\sum_{\alpha \in A} \lambda_\alpha \cdot e_\alpha = \sum_{\alpha \in A} (x, e_\alpha) e_\alpha$ - ряд Фурье вектора $x \in \mathcal{H}$
по системе $E$.

---

## Page: page_3.png

# Интеграл Эйлера

$$B(a, b) = \int_0^1 t^{a-1} (1-t)^{b-1} dt$$ – Инт. Эйлера 1-го рода, или $B$-ф-ция.
$$\Gamma(a) = \int_0^\infty t^{a-1} e^{-t} dt$$ – Инт. Эйлера 2-го рода, или $\Gamma$-ф-ция.

## Свойства:
- Обл. определения: $D_\Gamma = \{a > 0\} = \mathbb{R}_{>0}$.
$$D_B = \{a, b > 0\} = \mathbb{R}^2_{>0}.$$

- Док-во: 1) $\Gamma(a) = \int_0^\infty t^{a-1} e^{-t} dt = \int_0^1 t^{a-1} e^{-t} dt + \int_1^\infty t^{a-1} e^{-t} dt$
$$t^{a-1}e^{-t} \underset{t \to 0}{\sim} t^{a-1} = \frac{1}{t^{1-a}}$$
$$\int_0^1 \frac{dt}{t^{1-a}} < \infty \Leftrightarrow \begin{cases} 1-a < 1 \\ a > 0 \end{cases}$$
$$\forall a \in \mathbb{R}: \quad |t^{a-1} e^{-t}| = |t^{a-1} e^{-t/2} \cdot e^{-t/2}| \le C e^{-t/2}$$
"экспонента "задавит"" на $\infty$
$$\int_1^\infty e^{-t/2} dt < \infty.$$
Сходится только для $a > 0$.
2) $B(a, b) = \int_0^1 t^{a-1} (1-t)^{b-1} dt = \int_0^{1/2} t^{a-1} (1-t)^{b-1} dt + \int_{1/2}^1 t^{a-1} (1-t)^{b-1} dt$
$$t^{a-1} (1-t)^{b-1} \underset{t \to 0}{\sim} t^{a-1}$$
сх. при $a>0$
$$t^{a-1} (1-t)^{b-1} \underset{t \to 1}{\sim} (1-t)^{b-1}$$
сх. при $b > 0$

- Диф-ть $\Gamma$: $\Gamma \in C^\infty (\mathbb{R}_{>0})$
при этом $\Gamma^{(n)} (a) = \int_0^\infty (\ln t)^n t^{a-1} e^{-t} dt, n \ge 1$
Нужно, чтобы $\frac{\partial}{\partial a} (t^{a-1} e^{-t}) = \ln t \cdot t^{a-1} e^{-t}$ имела инт. мажоранту
в нек. окр. $(a_0 - \varepsilon, a_0 + \varepsilon), a_0 > 0$.
$$g(t) = \sup_{a \in (a_0 - \varepsilon, a_0 + \varepsilon)} |\ln t \cdot t^{a-1} e^{-t}| = |\ln t \cdot e^{-t}| \cdot \max \{t^{a_0 - \varepsilon - 1}, t^{a_0 + \varepsilon - 1}\}$$
$$\sup_{a \in (a_0 - \varepsilon, a_0 + \varepsilon)} t^{a-1} = \max \{t^{a_0 - \varepsilon - 1}, t^{a_0 + \varepsilon - 1}\}$$

---

## Page: page_30.png

# 29/02/24
##
Обозн.: $x \sim \sum_{\lambda \in A} \lambda e_a$
- Если $E$ - ортогональна, то $\{\frac{e_a}{\|e_a\|}\}_{a \in A}$ - ортонорм., тогда
$$x \sim \sum_{a \in A} (x, \frac{e_a}{\|e_a\|}) \frac{e_a}{\|e_a\|} = \sum_{a \in A} \frac{(x, e_a)}{(e_a, e_a)}e_a$$ – ряд Фурье по ортогональной системе $E$.
($\textit{коэф. Фурье}$)

Примеры ортогональных систем
###
1) Вещественная тригонометрическая система
$\mathcal{H} = L_2([-\pi; \pi], dx)$, $E = \{\underset{n \ge 1}{\sin nx}, \underset{m \ge 0}{\cos mx}\}$ - ортог. система
Проверяем:
$$\int_{-\pi}^{\pi} \sin nx \cdot \sin mx dx = \pi \cdot \delta_{nm}$$
$$\int_{-\pi}^{\pi} \cos nx \cdot \cos mx dx = \pi \cdot \delta_{nm} \text{, если } (n, m) \ne (0, 0)$$
$$(n, m) = (0, 0) \rightarrow \int_{-\pi}^{\pi} 1 \cdot 1 dx = 2\pi$$
$$\int_{-\pi}^{\pi} \sin nx \cos mx dx = 0$$
Пусть $f \in L_2([-\pi; \pi])$. Коэф. Фурье:
$$\frac{a_0}{2} := \frac{(f, 1)}{(1, 1)} = \frac{\int_{-\pi}^{\pi} f(x) dx}{2\pi} = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) dx$$
*чтобы было соглас. с $a_n$*
$$a_n := \frac{(f, \cos nx)}{(\cos nx, \cos nx)} = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos nx dx$$
$$b_n := \frac{(f, \sin nx)}{(\sin nx, \sin nx)} = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin nx dx$$
$$\Rightarrow f(x) \sim \frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos nx + b_n \sin nx$$

2) Комплексная тригонометрическая система
$\mathcal{H} = L_2([-\pi; \pi], dx)$, $E = \{e^{inx}, n \in \mathbb{Z}\}$
$$\int_{-\pi}^{\pi} e^{inx} \cdot \overline{e^{imx}} dx = \int_{-\pi}^{\pi} e^{i(n-m)x} dx = 2\pi \delta_{nm}$$

---

## Page: page_31.png

#  

$$c_n = \frac{(f, e^{inx})}{(e^{inx}, e^{inx})} = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) e^{-inx} dx$$
$$f(x) \sim \sum_{n \in \mathbb{Z}} c_n e^{inx} := \lim_{N \to \infty} \sum_{n=-N}^N c_n e^{inx}$$

## §3 Функции Радемахера и система Уолша

- $R_0(x) = 1$
- $R_n(x) = sgn(sin(2^n \pi x))$ при $n \ge 1$
$\mathcal{H} = L_2([0;1])$

Очевидно, что $(R_n, R_m) = \delta_{nm}$

- $W_{n_1 n_2 ... n_k}(x) = R_{n_1} \cdot R_{n_2} \cdot ... \cdot R_{n_k}$ - функция Уолша
$\Rightarrow (W_{n_1 ... n_k}, W_{m_1 ... m_r}) = 0$, если $\vec{n} \ne \vec{m}$

## §4 Собственные функции симметрического дифференциального оператора

\begin{cases}
u'' + q(x) u(x) = \lambda u(x), \quad q \in C^{\infty}(a,b), \quad a,b \in \mathbb{R}, \quad \lambda \in \mathbb{R} \\
u(a) = u(b) = 0
\end{cases} (c.2.)

Пусть $D = \frac{d^2}{dx^2} + q(x)$, тогда $Du = \lambda \cdot u$ (ур-ие системы)
$u \in L_2(a,b)$ и $u(a) = u(b) = 0$

Пусть $\lambda_1 \ne \lambda_2$. Покажем, что решения $u_1$ и $u_2$ ортогональны (если сущ.):
$(u_1, \lambda_2 u_2) = (u_1, u_2'' + q u_2) = \int_a^b u_1 q u_2 dx + \int_a^b u_1 u_2'' dx \ominus$

$I = \int_a^b u_1 u_2'' dx = \int_a^b u_1 du_2' = u_1 \cdot u_2' \Big|_a^b - \int_a^b u_1' u_2' dx = -u_1'u_2 \Big|_a^b + \int_a^b u_2 u_1'' dx$
$= 0$ т.к. $u_1(b) = u_1(a) = 0$


---

## Page: page_32.png

# Лекция (Дата, Глава)

$$
\oint_a u_2 (qu_1 + u''_1) dx = \lambda_1 \oint_a u_2 u_1 dx = \lambda_1 (u_2, u_1)
$$
$$
\Rightarrow (\lambda_1 - \lambda_2)(u_1, u_2) = 0
$$
$$
\Rightarrow (u_1, u_2) = 0
$$

## § Классические ортогональные многочлены

Эрмита Лагерра Якоби
$$H_n, H = L_2(\mathbb{R}, e^{-x^2}dx) \quad L_n, H = L_2([0; +\infty), e^{-x}dx) \quad P_n(x, \alpha, \beta), H = L_2([-1, 1], p_{\alpha, \beta}(x) dx)$$

Частный случай многочленов Якоби:

Многочлены Лежандра
$$P_n \in L_2([-1, 1], dx)$$
$$P_n(x) = C_n \frac{d^n}{dx^n} ((x^2 - 1)^n)$$
Докажем, что $(P_n, P_m) = 0$, если $n \ne m$
$$(x^k, P_n) = C_n \int\limits_{-1}^1 x^k \frac{d^n}{dx^n}((x^2 - 1)^n) dx = C_n \int\limits_{-1}^1 x^k d(\frac{d^{n-1}}{dx^{n-1}}((x^2 - 1)^n)) = $$
$$0 \le k < n-1$$
$$= C_n x^k \frac{d^{n-1}}{dx^{n-1}}((x^2 - 1)^n)\Big|_{-1}^1 - C_n \int\limits_{-1}^1 kx^{k-1} \frac{d^{n-1}}{dx^{n-1}}((x^2 - 1)^n) dx = -kC_n \int\limits_{-1}^1 x^{k-1} P_{n-1}(x) dx = $$
$$= 0, \text{ т.к. } \pm 1 \text{ корни }$$
$$= -k C_n \int\limits_{-1}^1 x^{k-1} \frac{d^{n-1}}{dx^{n-1}}((x^2 - 1)^n) dx = ... = (-1)^k k! \cdot C_n \int\limits_{-1}^1 x^{k-n} \frac{d^{n-k}}{dx^{n-k}}((x^2 - 1)^n) dx = $$
$$ = (-1)^k k! \cdot C_n \cdot \frac{d^{n-k-1}}{dx^{n-k-1}}((x^2 - 1)^n) \Big|_{-1}^1 = 0$$

## § Проекция

### Опр.
Пусть $E = \{e_1, ..., e_n\}$ - ортонормированная система в Гильбертовом пространстве $H$.

Вектор $x_E = (x, e_1)e_1 + ... + (x, e_n)e_n$ наз. ортогональной проекцией $x$ на подпространство $L_E = <e_1, ..., e_n>$.


---

## Page: page_33.png

# Заголовок лекции
## §

### Свойства:
1) $\forall y \in L_E \quad x - x_E \perp y$
т.к. $y \in L_E = <e_1, ..., e_n> \Rightarrow \exists d_j: y = d_1 e_1 + ... + d_n e_n$
$(y, x - x_E) = (y, x) - (y, x_E)$
$(y, x_E) = \left(\sum d_j e_j, \sum \lambda_k e_k\right) = \sum \sum d_j \overline{\lambda_k} (e_j, e_k) = \sum \overline{\lambda_j} d_j = \sum (x, e_j) d_j = $
$= \sum (e_j, x) d_j = \left(\sum d_j e_j, x\right) = (y, x)$
$\Rightarrow (y, x - x_E) = 0$.
2) $x_E$ ближайший к $x$ из $L_E$, т.е. $\|x - x_E\| = \inf_{y \in L_E} \|x - y\|$
Напомним т. Пифагора

Пусть $z_1, ..., z_m$ – ортонорм. система, то для
$z = z_1 + ... + z_m \quad \|z\|^2 = \|z_1\|^2 + ... + \|z_m\|^2$
$\|z\|^2 = (z, z) = \sum_{k=1}^m \sum_{j=1}^m (z_k, z_j) = \sum_{k=1}^m (z_k, z_k) = \sum_{k=1}^m \|z_k\|^2.$
$\|x - y\|^2 = \|x - x_E + x_E - y\|^2 = \|x - x_E\|^2 + \|x_E - y\|^2 \ge \|x - x_E\|^2$
$$y \in L_E$$
по св-ву 1) $x - x_E \perp L_E$

$\Updownarrow$ т. Пифагора
$\Leftrightarrow x_E = y$.

### Теорема (неравенство Бесселя)
Пусть $E = \{e_n\}_{n>1}$ – ортонорм. система в $H$, $x \in H$.
Тогда $\exists \lim_{N \to \infty} \sum_{n=1}^N (x, e_n) e_n \in H$ и $\|x\|^2 \ge \sum_{n=1}^\infty |(x, e_n)|^2$.

### Доказательство:
1) Пусть $L_N = <e_1, ..., e_n>$
(лин. оболочка)
и $x_N = (x, e_1) e_1 + ... + (x, e_n) e_n$ – проекция $x$ на $L_N$
$\|x_N\|^2 = \sum_{i=1}^N |(x, e_i)|^2$
(т. Пифагора)
$\|x - x_E\|^2 > 0$
$\|(x - x_E, x - x_E) = (x - x_E, x) - (x - x_E, x_E) = (x, x) - (x_E, x)$
$(x, x) - (x - x_E, x_E) - (x_E, x_E)$
$\quad \Updownarrow$
0

---

## Page: page_34.png

$$||x||^2 - ||x_E||^2 \ge 0, \text{и.е.} \quad ||x_E||^2 \le ||x||^2$$
$$\Rightarrow \sum_{1}^{N} |(x, e_n)|^2 \le ||x||^2 \quad \forall N \ge 1 \Rightarrow \sum_{1}^{\infty} |(x, e_n)|^2 \le ||x||^2$$
2) Чтобы доказать, что ряд $\sum (x, e_n) e_n$ сходится в $H$, достаточно доказать, что последовательность
$$S_N = \sum_{k=1}^N (x, e_k) e_n \text{ - фунд. в } H.$$
$$\forall \varepsilon > 0 \quad \exists N_0 \in \mathbb{N}: \quad \forall n, m \ge N_0 \quad ||S_n - S_m|| < \varepsilon$$
$$\text{и.е.} \quad ||S_n - S_m|| = ||\sum_{1}^{n} (x, e_k) e_k - \sum_{1}^{m} (x, e_k) e_k||^2 = ||\sum_{k=m+1}^{n} (x, e_k) e_k||^2 =$$
$$\uparrow = \sum_{k=m+1}^{n} |(x, e_k)|^2 < \varepsilon$$
*п. Пифагора*
$$\uparrow \text{ и.и. ряд } \sum_{1}^{\infty} |(x, e_k)|^2 \text{ сходится.}$$

### Опр.
Пусть $E$ - ортонорм. система векторов в гильб. пр-ве $H$.
Система $E$ наз.
- *замкнутой*, если $\forall x \in H$ выполняется равенство Парсеваля (уравнение замкнутости)
$$||x||^2 = \sum_{n=1}^{\infty} |(x, e_n)|^2$$
- *ортонормированным базисом (ОНБ), или базисом Гильберта*, если $\forall x \in H \quad x = \sum_{n=1}^{\infty} (x, e_n) e_n$
$$\text{и.е.} \lim_{N \to \infty} ||x - \sum_{n=1}^{N} (x, e_n) e_n || = 0$$

### Опр.
Пусть $H$ - гильб. пр-во, система векторов $V = \{v_{\alpha}\}_{\alpha \in A}$ наз. *полной*, если $\overline{cl<V>} = H$ (*замыкание*)

### Предложение (о полноте системы векторов)
Пусть $H$ - гильб. пр-во и $V$ - сист. векторов
$V$ - полна $\Leftrightarrow V^{\perp} := \{z \in H: (z, v) = 0 \quad \forall v \in V\} = 0$
*орт. дополнение*


---

## Page: page_35.png

# 04/03/24
## § Д-во:
### 1)
$V$ - полное, т.е. $cl<V> = H$
Тогда пусть $h \in V^{\perp}$ и $h \ne 0$ - любой вектор из лин. оболочки.
$$\|h - \sum_{n=1}^N d_n v_n\|^2 = \|h\|^2 + \|\sum d_n v_n\|^2 \ge \|h\|^2 > 0$$
*т. Пифагора*
$$\Rightarrow dist(h, cl<V>) > 0 = dist(h, H) = 0$$
*расстояние* $\Rightarrow$ *противоречие*
$$\Rightarrow V^{\perp} = \{0\}.$$
### 2)
Пусть $V^{\perp} = \{0\}$
Пусть $\tilde{V} \subset V$ - лин. обол. и $<\tilde{V}> = <V>$
$\tilde{V}$ - орт-ия Г.Ш. $\to E = \{e_n\}_{n \ge 1}$
1° $E$ - ортонормированная система
2° $<v_1, \dots, v_n> = <e_1, \dots, e_n> \quad \forall n \ge 1$
$$\Downarrow$$
$$<E> = <\tilde{V}>$$
Возьмем $x \in H$, $x_E = \sum_{n=1}^\infty (x, e_n)e_n$ - по нер-ву Бесселя $x \in H$
$$\|x - x_E\|^2 \stackrel{?}{=} 0$$
$$h \perp <E> \quad \text{из св-в проекции}$$
$$\Downarrow$$
$$h \perp <\tilde{V}>$$
$$\Downarrow$$
$$h \perp <V> \Rightarrow \text{т.к.} \quad V^{\perp} = \{0\} \Rightarrow h = 0$$
$$\Downarrow h$$
$$x = \sum_{n=1}^\infty (x, e_n)e_n$$
$$\Downarrow$$
$$x \in cl<E>$$

$$\Rightarrow H \subset cl<E> = cl<V> \Rightarrow H = cl<V>$$

## Теорема (о базисе)
Пусть $H$ - г. пр-во, $E = \{e_n\}_{n \ge 1}$ - ортонорм. система
Тогда след. усл. эквивалентны:
- $E$ - полная система
- $E$ - базис
- $E$ - замкнутая система

---

## Page: page_36.png

# Заголовок лекции
## §
### Доказательство:
-во: (1) $\Rightarrow$ (2): $x \in H = cl<E> \Rightarrow \exists d_n$ - число
$$ \left\| x - \sum_{n=1}^N d_n e_n \right\| \underset{N \to \infty}{\longrightarrow} 0 $$
$$ 0 \le \left\| x - \sum_{n=1}^N (x, e_n) e_n \right\| \le \left\| x - \sum_{n=1}^N d_n e_n \right\| $$
св-во проекции
$$ \underset{N \to \infty}{m.e.} \ x = \sum_{n=1}^\infty (x, e_n) e_n \text{ и след-но } E - \text{ОИБ} $$
(2) $\Rightarrow$ (3): $x = \sum_{n=1}^\infty (x, e_n) e_n \Leftrightarrow \sum_{n=1}^N (x, e_n) e_n \underset{N \to \infty}{\overset{\|\cdot\|}{\longrightarrow}} x$
$$ \left( \sum_{n=1}^N (x, e_n) e_n, \sum_{n=1}^N (x, e_n) e_n \right) = \sum_{n=1}^N |(x, e_n)|^2 \underset{N \to \infty}{\longrightarrow} \sum_{n=1}^\infty |(x, e_n)|^2 $$
с одной стороны
$$ \underset{N \to \infty}{\longrightarrow} (x, x) = \|x\|^2 $$
$m.k.$ скалярное произведение непрерывно, $m.e.$ $(x, y_n) \underset{y_n \to 0}{\longrightarrow} (x, 0) = 0$.
$$ |(x, y_n)| \le \|x\| \cdot \|y_n\| $$
$$ \Rightarrow \|x\|^2 = \sum_{n=1}^\infty |(x, e_n)|^2 $$
уравнение Парсеваля
усл. 3 $\surd$

(3) $\Rightarrow$ (1): Пусть $E$ - замкнуто, $m.e.$ $\|x\| = \sum_{n=1}^\infty \| (x, e_n) \|^2$
Пусть $x \in E^\perp \Rightarrow (x, e_n) = 0$
$$ \Rightarrow \|x\| = 0 \Rightarrow x = 0 $$
$m.e.$ $E$ - полна (с учетом предположения)

### Примеры:
1.  $H = l_2 = \{ x = (x_1, x_2, ...): \sum_{n=1}^\infty |x_n|^2 < \infty \}$
$$ (x, y)_H = \sum_{n=1}^\infty x_n \overline{y_n}, \ \|x\| = \sqrt{(x, x)} $$
Система ортов $e_n = (0, ..., \underset{n}{1}, 0, ...)$ - ОНБ
$$ \forall x \in l_2 \ \|x\|^2 = \sum_{n=1}^\infty |x_n|^2 = \sum_{n=1}^\infty |(x, e_n)|^2 - \text{уравнение замкнутости} $$
$$ x_k = (x, e_k) $$

2.  $H = L_2 ([-\pi, \pi], dx)$
$$ E = \{1, \sin nx, \cos nx\}_{n \ge 1} - \text{ОИБ} $$
$$ \{ e^{inx} \}_{n \in \mathbb{Z}} - \text{ОИБ} $$
уравнение замкнутости $\equiv$ равенство Ляпунова


---

## Page: page_37.png

```markdown
#  
$$a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos nx \, dx, n \ge 0$$
$$b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin nx \, dx, n \ge 1$$
$$c_n = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) e^{-inx} \, dx, n \in \mathbb{Z}$$
$$\frac{1}{\pi} \int_{-\pi}^{\pi} |f(x)|^2 \, dx = \frac{|a_0|^2}{2} + \sum_{n=1}^\infty |a_n|^2 + |b_n|^2$$
$$\frac{1}{2\pi} \int_{-\pi}^{\pi} |f(x)|^2 \, dx = \sum_{n \in \mathbb{Z}} |c_n|^2$$
- Равенство Парсеваля (для классической тригон-ой системы)

## §
### Опр.
Поточечная сходимость ряда Фурье (для классич. триг. системы)
Пусть $f \in L_1([-\pi; \pi])$, тогда определен ряд Фурье $f \sim \frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos nx + b_n \sin nx$

### Теорема Колмагорова (без д-ва)
$\exists f \in L_1([\pi;\pi]): \forall x \in [-\pi;\pi]$ ряд Фурье расх. в т.ч.
При этом $\forall f \in L_1([-\pi;\pi])$
$$S_N(x) = \frac{a_0}{2} + \sum_{n=1}^\infty a_n \cos nx + b_n \sin nx \xrightarrow[\lambda]{} f(x)$$ сходимость по мере, а не "след-но" сходится по мере Лебега.

### Теорема (Карлесон, Хамм) (без док-ва)
Пусть $f \in L_p([-\pi;\pi]), p > 1$. Тогда $S_N(x) \xrightarrow[N \to \infty]{} f(x)$ п.в.

## § Интеграл Дирихле
$$S_N(x) = \frac{a_0}{2} + \sum_{n=1}^N a_n \cos nx + b_n \sin nx = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t) dt + \sum_{n=1}^N (\frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \cos nt \, dt) \cdot \cos nx +$$
$$+ (\frac{1}{\pi} \int_{-\pi}^{\pi} f(t) \sin nt \, dt) \cdot \sin nx = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) (\frac{1}{2} + \sum_{n=1}^N \cos(nt) \cos(nx) + \sin(nt) \cdot \sin(nx))$$
$$a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos nx \, dx, n \ge 0$$
$$b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin nx \, dx, n \ge 1$$
$$c_n = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) e^{-inx} \, dx, n \in \mathbb{Z}$$
$$\frac{\cos(nt - nx)}{\cos n(t-x)}$$
$$\cos n(x-t)$$
```

---

## Page: page_38.png

#  
$$\frac{1}{2} + \sum_{n=1}^N \cos n(x-t) = D_N(x-t)$$ - ядро Дирихле
$$S_N(x) = \frac{1}{\pi} \int_{-\pi}^\pi f(t) D_N(x-t) dt$$
$$D_N(u) = \frac{1}{2} + \sum_{n=1}^N \cos nu = \frac{1}{\sin \frac{u}{2}} \cdot (\frac{1}{2} \sin \frac{u}{2} + \sum_{n=1}^N \cos nu \sin \frac{u}{2}) =$$
$$\cos x \sin y = \frac{1}{2} (\sin(x+y) - \sin(x-y))$$
$$=\frac{1}{\sin \frac{u}{2}} (\frac{\sin \frac{u}{2}}{2} + \frac{\sin \frac{3u}{2} - \sin \frac{u}{2}}{2} + \frac{\sin \frac{5u}{2} - \sin \frac{3u}{2}}{2} +...+ \frac{\sin \frac{2N+1}{2}u - \sin \frac{2N-1}{2}u}{2}) =$$
вжух
$$=\frac{1}{2} \frac{\sin \frac{2N+1}{2}u}{\sin \frac{u}{2}} = D_N(u), N>1$$
## Свойства ядра Дирихле
- $1^\circ$ $D_N(u)$ - четная функция
- $2^\circ$ $\int_{-\pi}^\pi D_N(u) du = \pi$
- $3^\circ$ $\forall \delta > 0$ $\lim_{N \to \infty} \int_\delta^\pi D_N(u) du = \lim_{N \to \infty} \int_\delta^\pi \frac{\sin \frac{2N+1}{2} u}{2 \sin \frac{u}{2}} du = 0$
по лемме Р.-Л. для $[\delta, \pi] = [\delta, \pi]$ $f(x) = \frac{1}{2\sin\frac{u}{2}} \in L_1([\delta, \pi])$
### Теорема (Лемма Римана–Лебега)
Пусть $f \in L_1((a, b))$, $a, b \in \mathbb{R}$. Тогда
$$\lim_{p \to \infty} \int_a^b f(x) \cos px dx = 0$$
$$\lim_{p \to \infty} \int_a^b f(x) \sin px dx = 0$$
$$\lim_{p \to \infty} \int_a^b f(x) e^{ipx} dx = 0$$
### Док-во:
$\forall \varepsilon > 0$ $\exists \varphi_\varepsilon \in C_0^\infty (a, b)$: $\|f - \varphi_\varepsilon \|_1 < \frac{\varepsilon}{2}$ (по м. о плотности $C_0^\infty$ в $L_p(\mathbb{R}^n)$)
тогда
$$|\int_a^b f(x) \cos px dx| \le |\int_a^b (f(x) - \varphi_\varepsilon(x)) \cos px dx| + |\int_a^b \varphi_\varepsilon(x) \cos px dx| \le$$
$$\le \|f - \varphi_\varepsilon\|_1 < \frac{\varepsilon}{2}$$
$$\le \frac{\varepsilon}{2} + |\int_a^b p' \varphi_\varepsilon d \sin px| = \frac{\varepsilon}{2} + |\frac{\varphi_\varepsilon \cdot \sin px}{p} |_{x=a}^{x=b} - \frac{1}{p} \int_a^b \varphi'_\varepsilon \sin px dx| \le$$
$$\varphi_\varepsilon (a) = \varphi_\varepsilon(b) = 0$$
т.к. $\varphi_\varepsilon \in C_0(a, b)$
$$\le \frac{\varepsilon}{2} + \frac{1}{|p|} \int_a^b |\varphi'_\varepsilon(x)| dx \le \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon$$
$< \infty$ (т.к. $\varphi_\varepsilon \in C_0(a, b)$)
$\exists p_0 \in \mathbb{R}$: $\forall |p| > |p_0|$ $\frac{1}{|p|} \int_a^b |\varphi'_\varepsilon| dx < \frac{\varepsilon}{2}$

---

## Page: page_39.png

# Теорема (принцип локализации)
Пусть $f \in L_1 (-\pi, \pi)$ и точка $x \in (-\pi, \pi)$.
Если при этом $\lim_{N \to \infty} S_N(x)$ сущ., то он зависит от значений функции $f$ в сколь угодно малой окр. м. $x$. Живет на $[-\pi;\pi]$ на всей числовой прямой живет.
### Док-во:
$$S_N = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) D_N(x-t) dt =$$
$$= \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) D_N (x-t) dt =$$
$$\begin{cases}
x - t = s \\
t = x - s \\
dt = -ds
\end{cases} = \frac{1}{\pi} \int_{x + \pi}^{x-\pi} f(x-s) D_N (s) (-ds) = \frac{1}{\pi} \int_{-x+\pi}^{x-\pi} \tilde{f} (x-s) D_N(s) ds =$$
$$= \frac{1}{\pi} \int_{-\pi}^{\pi} \tilde{f} (x-s) D_N (s) ds = \frac{1}{\pi} \int_0^{\pi} \tilde{f} (x-s) D_N(s) ds + \frac{1}{\pi} \int_{-\pi}^{0} \tilde{f} (x-s) D_N(s) ds =$$
$$м.к. \tilde{f} (x-s) D_N(s) - 2\pi - периодична \qquad S = -t$$
$$= \frac{1}{\pi} \int_0^{\pi} \tilde{f} (x-t) D_N(t) dt + \frac{1}{\pi} \int_0^{\pi} \tilde{f} (x+t) D_N(t) dt = \frac{1}{\pi} \int_0^{\pi} (\tilde{f} (x-t) + \tilde{f} (x+t)) D_N(t) dt =$$
$$=\frac{1}{\pi} \int_0^{\delta} (\tilde{f} (x-t) + \tilde{f} (x+t)) D_N(t) dt + \frac{1}{\pi} \int_{\delta}^{\pi} (\tilde{f} (x-t) + \tilde{f} (x+t)) D_N(t) dt$$
$$=o(1) \text{ при } N \to \infty$$
По лемме Римана-Лебега $\lim_{N \to \infty} \int_{\delta}^{\pi} \frac{\tilde{f} (x-t) + \tilde{f} (x+t)}{2 \sin \frac{t}{2}} \sin \frac{2N+1}{2} t dt = 0$
$$g_x(t) = \frac{\tilde{f} (x-t) + \tilde{f} (x+t)}{2 \sin \frac{t}{2}} \quad g_x(t) \in L_1 ([ \delta;\pi])$$
$$\int_{\delta}^{\pi} |g_x(t)| dt \le \max_{t \in [\delta;\pi]} \frac{1}{2 \sin \frac{t}{2}} \int_{\delta}^{\pi} |\tilde{f} (x-t)| + |\tilde{f} (x+t)| dt < \infty$$
$$\Rightarrow \lim_{N \to \infty} S_N (x) = \lim_{N \to \infty} \frac{1}{\pi} \int_0^{\delta} (\tilde{f} (x-t) + \tilde{f} (x+t)) D_N(t) dt \leftarrow \text{ есть } f|(x-\delta, x+\delta)$$

# Условие Дини
### Опр.
Функция $f: V(x) \to \mathbb{C}$ удовл. усл. Дини в т. $x \in \mathbb{R}$, если:
1) $\exists$ и конечны односторон. пределы
$\lim_{\delta \to \pm 0} f(x + \delta) := f(x \pm 0) \in \mathbb{R}$

---

## Page: page_4.png

```markdown
#  
$$ \int_0^\infty g(t) dt = \int_0^1 |\ln t| e^{-t} t^{a_0 - \varepsilon - 1} dt + \int_1^\infty |\ln t| e^{-t} t^{a_0 - \varepsilon - 1} dt $$
$$ \int_0^1 |\ln t| t^{a_0 - \varepsilon - 1} dt = \int_0^1 \ln \frac{1}{t} t^{a_0 - \varepsilon - 1} dt = \begin{cases} y = \ln \frac{1}{t} \\ dy = - \frac{1}{t} dt \\ t=0 \to y = +\infty \\ t = 1 \to y=0 \end{cases} = \int_0^{+\infty} y \cdot e^{-y(a_0 - \varepsilon)} dt = $$
$$ = \frac{1}{(a_0 - \varepsilon)^2} \int_0^{+\infty} u e^{-u} du = \frac{1}{(a_0 - \varepsilon)^2} \Gamma(2) < \infty. $$
смотрим образом, но и. Диф. Во$\Pi$:
$$ \frac{\partial \Gamma}{\partial a} = \int_0^\infty \frac{\partial}{\partial a} (t^{a-1} e^{-t}) dt = \int_0^\infty \ln t \cdot t^{a-1} e^{-t} dt $$

### Формула понижения
$\alpha \Gamma(a) = \Gamma(a+1) \quad \forall a > 0$.

### Доказательство
$$ \Gamma(a+1) = \int_0^\infty t^a e^{-t} dt = \int_0^\infty t^a d(-e^{-t}) = t^a(-e^{-t}) \Big|_{t=0}^{t = \infty} - \int_0^\infty (-e^{-t}) a t^{a-1} dt = $$
$$ = a \int_0^\infty t^{a-1} e^{-t} dt. $$

### Следствие
$$ \Gamma(n+1) = n \Gamma(n) = n(n-1) \Gamma(n-1) = ... = n(n-1) ... \Gamma(1), \quad \Gamma(1) = \int_0^\infty e^{-t} dt = 1. $$
$$ n \in \mathbb{N} \qquad = n! $$

### Асимптотика на границе:
- $x \Gamma(x) \underset{x \to 0^+}{\sim} 1$
### Доказательство:
$x \Gamma(x) = \Gamma(x+1) \to \Gamma(1)$ по непр[НРЗБ]

- $\Gamma(x+1) \underset{x \to +\infty}{\sim} (\frac{x}{e})^x \sqrt{2 \pi x} \quad$ (ф-ла Стирлинга)

### Доказательство:
$$ \Gamma(x+1) = \int_0^\infty t^x e^{-t} dt $$
$$ \begin{cases} t = x + x \cdot s \sqrt{\frac{2}{x}} \\ t=0 \to 0 = x(1 + s \sqrt{\frac{2}{x}}) \Rightarrow s = - \sqrt{\frac{x}{2}} \\ t = +\infty \to s = - \infty \\ dt = \sqrt{2x} ds \end{cases} $$
$$ = \int_{-\sqrt{\frac{x}{2}}}^{+\infty} (x(1 + s \sqrt{\frac{2}{x}}))^x \cdot e^{-x} \cdot e^{-s \sqrt{2x}} \cdot \sqrt{2x} ds = \sqrt{2x} (\frac{x}{e})^x \int_{-\sqrt{\frac{x}{2}}}^{+\infty} (1 + s \sqrt{\frac{2}{x}})^x e^{-s \sqrt{2x}} ds $$

Положим $\sqrt{\frac{x}{2}} = y$, $x \to +\infty \Rightarrow y \to +\infty$
```

---

## Page: page_40.png

```markdown
# 07/03/24

2) для некоторого $\varepsilon > 0$ интеграл
$$ \int_0^\varepsilon \left| \frac{f(x \pm t) - f(x \pm 0)}{t} \right| dt$$
сходится абсолютно ($< \infty$).

Примеры:
1) Локально-гёльд.-функции
$f: V(x) \to \mathbb{C}: \forall t_1, t_2 \in V(x)$
$$|f(t_1) - f(t_2)| \le H_f \cdot |t_1 - t_2|^\alpha, \quad \alpha \in (0;1]$$
(константа, не завис. от $t_1, t_2$).
Функции пок. Гёльда. удовл. усл. Дини:
1) т.к. $f \in C(V(x))$, то $f(x \pm 0) = f(x)$
2)
$$ \int_0^\varepsilon \left| \frac{f(x \pm t) - f(x)}{t} \right| dt \le H_f \int_0^\varepsilon \left| \frac{x \pm t - x}{t} \right|^\alpha dt = H_f \int_0^\varepsilon \frac{dt}{t^{1-\alpha}} < \infty$$
т.к. $1 - \alpha < 1$
$\alpha > 0$

2) Односторонне - локально гёльд.-функции
$\exists \delta > 0$: на $(x-\delta, x)$ и $(x, x+\delta)$ $f$ - будет пок. гёльд-ой
$$|f(t_1) - f(t_2)| \le H_f |t_1 - t_2|^\alpha, \quad \alpha \in (0, 1]$$
$t_1, t_2 \in (x - \delta, x) \cup (x, x + \delta)$
Считаем, что $\lim_{t \to +0} f(x \pm t) := f(x \pm 0) \in \mathbb{R}$

3) Кусочно-гладкие функции:
$f: [a, b] \to \mathbb{C}$, если $\exists a = x_0 < x_1 < ... < x_{n-1} < x_n = b$
$1^\circ \quad f \in C^1(x_k, x_{k+1}), \quad k = \overline{0, n-1}$
$2^\circ \quad f(x_k \pm 0)$ $\exists$ и конечны
$3^\circ \quad f'(x_k \pm 0)$ $\exists$ и конечны

4) $$f(x) = \begin{cases} \sin \frac{1}{x}, x \ne 0 \\ 0, \quad x = 0 \end{cases}$$
не удовл. усл. Дини в точке $x=0$

$g(x) = \sqrt{1-x^2}, \quad x \in [-1, 1]$ и продолжаем период.
$g(1 \pm 0) = g(1) = 0$
$$\int_0^\varepsilon \left| \frac{g(1 \pm t) - g(1)}{t} \right| dt = \int_0^\varepsilon \frac{\sqrt{1 - (1 \pm t)^2}}{t} dt = \int_0^\varepsilon \frac{\sqrt{t^2 \pm 2t}}{t} dt = $$
$$ = \int_0^\varepsilon \frac{\sqrt{t \pm 2}}{\sqrt{t}} dt < \infty$$
```

---

## Page: page_41.png

# Теорема (о сходимости ряда Фурье в точке)
Пусть $f: \mathbb{R} \to \mathbb{C}$ - $2\pi$-период. ф-ция, $f \in L_1([-\pi, \pi])$, $x \in \mathbb{R}$ такая, что в ней вып. усл. Дини для $f$.

Тогда $S_N(x) = \frac{a_0}{2} + \sum_{n=1}^N a_n \cos nx + b_n \sin nx \xrightarrow{N \to \infty} \frac{f(x+0) + f(x-0)}{2}$.

## Доказательство
$S_N(x) = \frac{1}{\pi} \int_{-\pi}^{\pi} f(t) D_N(t-x) dt = \begin{cases} t-x = s \\ t = x+s \\ dt = ds \end{cases} =$
$= \frac{1}{\pi} \int_{-\pi-x}^{\pi-x} f(x+s) D_N(s) ds = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x+s) D_N(s) ds = \frac{1}{\pi} (\int_{-\pi}^{0} + \int_{0}^{\pi}) f(x+s) D_N(s) ds =$
$= \frac{1}{\pi} \int_{0}^{\pi} (f(x-s) - f(x-0)) D_N(s) ds + \frac{1}{\pi} \int_{0}^{\pi} (f(x+s) - f(x+0)) D_N(s) ds + \frac{f(x-0) + f(x+0)}{\pi} \int_0^\pi D_N(s) ds =$

$\frac{1}{2} \frac{\sin \frac{2N+1}{2}u}{\sin \frac{u}{2}} = D_N(u), N \ge 1$

не меняем знак, потому что $D_N$ - чистая, число
(то, что осталось)
$\frac{f(x-0) + f(x+0)}{\pi} \frac{\pi}{2}$
$\hookrightarrow \frac{1}{\pi} \int_0^{\pi} \frac{f(x+s) - f(x \pm 0)}{s} \cdot \frac{s}{2 \sin \frac{s}{2}} \cdot \sin \frac{2N+1}{2} s ds =$

$"g(s)"$

$= \frac{1}{\pi} \int_0^{\pi} g(s) \cdot \sin \frac{2N+1}{2} s ds =$

Лемма Римана-Лебега
$N \to \infty$ если $\int_0^{\pi} |g(s)| ds < \infty$

$\int_0^{\pi} |\frac{f(x \pm s) - f(x \pm 0)}{s}| \frac{s}{2\sin \frac{s}{2}} ds \le \frac{\pi}{2} \int_0^{\pi} |\frac{f(x \pm s) - f(x \pm 0)}{s}| ds < \infty$
$\uparrow$
$\frac{s/2}{\sin s/2} \le \frac{\pi}{2}, s \in [0, \pi]$.

2ое усл. Дини

### Пример:
$f(x) = sgn x$ на $(-\pi, \pi)$, продолж. по периоду на $\mathbb{R}$, шчетная

$a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos nx dx = 0$
симметр. промежуток

$b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin nx dx = \frac{2}{\pi} \int_0^{\pi} f(x) \sin nx dx = \frac{2}{\pi} \int_0^{\pi} \sin nx dx = \frac{2}{\pi n} (-\cos nx)|_0^{\pi} = \frac{2}{\pi n} (1 - (-1)^n)$ $n \ge 1$

---

## Page: page_42.png

#  
$$
b_n = \begin{cases} 0, & n = 2m, m > 1 \\ \frac{4}{\pi(2m-1)}, & n=2m-1, m>1 \end{cases}
$$
$$
f(x) \sim \sum_{m=1}^\infty \frac{4}{\pi(2m-1)} \sin((2m-1)x) \text{ - ряд Фурье для } f
$$
м.к. $f$-кусочно-гладкая, то $f(x) = \sum_{m=1}^\infty \frac{4}{\pi(2m-1)} \sin((2m-1)x)$, м.к.
$$
f(x) = \frac{f(x+0) + f(x-0)}{2}
$$
Пусть $x = \frac{\pi}{2}$, тогда $1 = f(\frac{\pi}{2}) = \sum_{m=1}^\infty \frac{4}{\pi(2m-1)} \sin((m-\frac{\pi}{2})) = \sum_{m=1}^\infty \frac{4(-1)^{m+1}}{\pi(2m-1)}$
$$
\sum_{m=1}^\infty \frac{(-1)^{m+1}}{2m-1} = \frac{\pi}{4}
$$
### Упр.
придумать $f$ и разл. в ряд Фурье, чтобы $\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}$
### Теорема (Фейера о равном. сх-сти)
Пусть $f: \mathbb{R} \to \mathbb{C}$ - $2\pi$ периодич. ф-ия, $f \in L_1([-\pi, \pi])$ и пусть на $E \subseteq \mathbb{R}$ $f$ равномер. непрер. Тогда
$$
\frac{S_0 + S_1 + \dots + S_N}{N+1} \xrightarrow{E} f(x)
$$
$$
\varphi_N(x-t) \text{ - ядро Фейера}
$$
### До-во:
$S_N = \frac{1}{\pi} \int_{-\pi}^\pi f(t) D_N(x-t) dt \Rightarrow \frac{S_0 + \dots + S_N}{N+1} = \frac{1}{\pi} \int_{-\pi}^\pi f(t) \sum_{k=0}^N \frac{D_N(x-t)}{N+1} dt$
$$
\varphi_N(u) = \frac{1}{N+1} \sum_{k=0}^N \frac{\sin \frac{2k+1}{2} u}{2\sin\frac{u}{2}} = \frac{1}{N+1} \frac{1}{2\sin\frac{u}{2}} \sum_{k=0}^N \sin \frac{u}{2} \sin \frac{2k+1}{2} u \stackrel{\circleddash}{=}
$$
$$
\sin x \sin y = \frac{1}{2} \cos(x-y) - \frac{1}{2} \cos(x+y)
$$
$$
\stackrel{\circleddash}{=} \frac{1}{(N+1) \cdot 4 \sin^2 \frac{u}{2}} (\cos(0 \cdot u) - \cos(1 \cdot u) + \dots + \cos(Nu) - \cos((N+1)u)) =
$$
$$
= \frac{1 - \cos((N+1)u)}{(N+1)4\sin^2 \frac{u}{2}} = \frac{2\sin^2 \frac{N+1}{2} u}{4(N+1) \sin^2\frac{u}{2}} = \frac{\sin^2 \frac{N+1}{2} u}{2(N+1)\sin^2\frac{u}{2}} = \varphi_N(u)
$$
$$
\frac{S_0 + \dots + S_N}{N+1} = \frac{1}{\pi} \int_{-\pi}^\pi f(t) \varphi_N (x-t) dt \stackrel{\circleddash}{=}
$$

---

## Page: page_43.png

# Лекция
$$
\tilde{\varphi}_N(u) = \begin{cases}
\frac{1}{\pi} \varphi_N(u), & u \in [-\pi, \pi] \\
0, & u \notin [-\pi, \pi]
\end{cases}
$$
- $\Theta \frac{1}{\pi} \int\limits_{-\pi}^{\pi} f(x-s) \varphi_N(s) ds = \int\limits_{\mathbb{R}} f(x-s) \tilde{\varphi}_N(s) ds = (f * \tilde{\varphi}_N)(x)$
*Проверим*, что $\tilde{\varphi}_N(u)$ есть $\delta$-образная послед-ть при $N \to \infty$
- 1) $\tilde{\varphi}_N(u) \ge 0 \quad \forall u \in \mathbb{R}$
- 2) $\int\limits_{\mathbb{R}} \tilde{\varphi}_N(u) du = \frac{1}{\pi} \int\limits_{-\pi}^{\pi} \sum\limits_{k=0}^N \frac{D_k(u)}{N+1} du = \frac{1}{N+1} \frac{1}{\pi} (N+1) \cdot \pi = 1$
- 3) $\int\limits_{\mathbb{R}\setminus (-\delta, \delta)} \tilde{\varphi}_N(u) du \underset{N \to \infty}{\longrightarrow} 0$

$$
||
$$

$$
\frac{2}{\pi} \int\limits_{\delta}^{\pi} \frac{\sin^2 \frac{N+1}{2} u}{2(N+1) \sin^2 \frac{u}{2}} du \underset{N \to \infty}{\longrightarrow} 0
$$
### Следствия
- ① Если $f$ *непр.* в *т.* $x \in \mathbb{R}$ и $S_N(x)$ *сходится*, то $S_N(x) \underset{N \to \infty}{\longrightarrow} f(x)$

    *До-во*: Пусть $S_N(x) \underset{N \to \infty}{\longrightarrow} a \in \mathbb{R}$, тогда $\frac{S_0(x) + ... + S_N(x)}{N+1} \longrightarrow a$
    
    $$
    \downarrow
    $$
    
    $f(x)$, *т.к.* $E = \{x\}$
- ② T. Вейерштрасса (*О равномерном приближении триг. много-ми*)

    Пусть $f \in C([-\pi, \pi])$, $f(-\pi) = f(\pi)$
    
    Тогда $\exists$ послед-ть триг. многочленов, *т.е.*
    
    $$
    T_N(x) = a_0(N) + \sum_{k=1}^{M(N)} a_k(N) \cos kx + b_k(N) \sin kx
    $$
    
    $$
    ||T_N(x) - f(x)||_{C[-\pi, \pi]} \underset{N \to \infty}{\longrightarrow} 0
    $$
    *Д-во*:
    
    [Рисунок графика]
    
    $\curvearrowleft$ *продолжили по периоду*
    
    На $E = [-\pi, \pi]$ ф-ция $\tilde{f}$ *равном. непр.* $\Rightarrow \frac{S_0(x) + ... + S_N(x)}{N+1} \underset{N \to \infty}{\stackrel{[-\pi, \pi]}{\longrightarrow}} f(x)$

---

## Page: page_44.png

# 
##

###

Тригонометрическая система полна в $L_2([-\pi;\pi])$
m.e. $\forall f \in L_2([-\pi;\pi])$ найдется послед-ть $T_N$: $\|T_N(x) - f(x)\|_2 \xrightarrow[N \to \infty]{} 0$

д-во: $\forall f \in L_2([-\pi;\pi])$ $\forall \varepsilon > 0$ $\exists g_\varepsilon \in C^\infty([-\pi;\pi])$: $\|f - g_\varepsilon\|_2 < \frac{\varepsilon}{2}$

$g_\varepsilon \in C[-\pi;\pi]$ и $g_\varepsilon(\pi) - g_\varepsilon(-\pi) = 0 \Rightarrow$ по св-ву $\exists T_N$ - триг.: $\|g_\varepsilon(x) - T_N\|_\infty < \frac{\varepsilon}{4\pi}$

Тогда $\|f - T_N\|_2 \le \|f - g_\varepsilon\|_2 + \|g_\varepsilon - T_N\|_2 \le \frac{\varepsilon}{2} + \int_{-\pi}^{\pi} \|g_\varepsilon - T_N\|_\infty dx \le \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon$.

11/03/24
28 марта потоковая (всё, до этой лекции (включительно): ИЗоП + ряды Фурье)

Скорость сходимости
ряда Фурье и коэф-ов Фурье

### Теорема (о связи коэф. Фурье $f$ и $f'$)
Пусть $f$ - $2\pi$ периодич., непр. ф-ция, кусочно-гладкая на периоде, и $f \sim \sum_{n \in \mathbb{Z}} c_n e^{inx}$.

Тогда $f' \sim \sum_{n \in \mathbb{Z}} inc_n e^{inx}$, м.е. $c'_n = in \cdot c_n$ (м.е. можно диф-ть р. Фурье почленно)

### Доказательство
$c'_n = \frac{1}{2\pi} \int_{-\pi}^{\pi} f'(x) e^{-inx} dx =$

$= \frac{1}{2\pi} \sum_{k=0}^{N-1} \int_{x_k}^{x_{k+1}} f'(x) e^{-inx} dx \stackrel{\textcircled{1}}{=} $
*по частям*

$\stackrel{\textcircled{1}}{=} \frac{1}{2\pi} \sum_{k=0}^{N-1} \left(e^{-inx} f(x)\Big|_{x_k}^{x_{k+1}} - \int_{x_k}^{x_{k+1}} f(x) (-in) e^{-inx} dx \right) = \frac{1}{2\pi} \sum_{k=0}^{N-1} e^{-inx_{k+1}} f(x_{k+1}) - e^{-inx_k}f(x_k) +$

$+ \frac{1}{2\pi} \sum_{k=0}^{N-1} \int_{x_k}^{x_{k+1}} f(x) (in) e^{-inx} dx$

$= \frac{in}{2\pi} \int_{-\pi}^{\pi} f(x) e^{-inx} dx = in \cdot c_n$

$\Rightarrow c'_n = in \cdot c_n$

![Рисунок графика, сопровождающий доказательство.](attachment:image.png)

$e^{-inx_N} f(x_N) - e^{-inx_0} f(x_0)$

$\underbrace{e^{-in\pi}}_{(-1)^n} f(\pi) - \underbrace{e^{in\pi}}_{(-1)^n} f(-\pi)$

$(-1)^n (f(\pi) - f(-\pi)) = 0$, потому что $f$ - $2\pi$ период.


---

## Page: page_45.png

# Лекция
## §
### Следствие:
Пусть $f$ - $2\pi$-периодич., $f \in C^{(m-2)}(\mathbb{R})$, $f^{(m-1)}$ - непр. и кусочно-гладкая.
Тогда коэф. Фурье $c_n$ для $f$ удовл. асим. соотношению
$$c_n = o\left(\frac{1}{n^m}\right) \text{ при } |n| \to +\infty$$

### Д-во:
$$c_n^{(m)} = in \cdot c_n^{(m-1)} = in \cdot in \cdot c_n^{(m-2)} = \underbrace{(in)...(in)}_{m} c_n \Rightarrow c_n = \frac{c_n^{(m)}}{i^m n^m}$$
Ясно, что $c_n^{(m)} \underset{n \to \infty}{\to} 0$, м.к. $f^{(m)} \in L_1([-\pi; \pi])$ и по лемме Р.-П.
$$\int_{-\pi}^{\pi} f^{(m)}(x) e^{-inx} dx \underset{n \to \infty}{\to} 0.$$

### $\varphi$:
$$L_p([-\pi; \pi]) \underset{p > 1}{\to} c_0(\mathbb{Z}) = \{x = (..., x_{-1}, x_0, x_1, ...), x_k \in \mathbb{C} : x_k \underset{|k| \to +\infty}{\to} 0\}$$
$$\varphi(f) = \{... c_{-2}, c_{-1}, c_0, c_1, c_2, ... \}, c_n = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(x) e^{-inx} dx\}$$
Каков образ $\varphi$?

### Известно:
$$\varphi(L_2([-\pi; \pi])) = l_2(\mathbb{Z}) = \left\{ \sum_{n \in \mathbb{Z}} |c_n|^2 < \infty \right\}$$
(м. Рисса-Фишера)

### Открытый вопрос:
$\varphi(L_1)$

### Теорема (о скорости равном. сх-ти ряда Фурье):
Пусть $f$ - $2\pi$ периодич., $f \in C^{(m-2)}(\mathbb{R})$, $f^{(m-1)}$ - кусочно-гладкая, $m > 1$ на периоде и непр. на $\mathbb{R}$. Есть $f^{(m)}$, но не везде.
Тогда $\sup_{x \in \mathbb{R}} |f(x) - S_n(x)| = o\left(\frac{1}{n^{m - \frac{1}{2}}}\right)$, $n \to +\infty$.

### Доказательство:
т.к. $f$ удовл. усл. Дини, то $f(x) = \sum_{n \in \mathbb{Z}} c_k e^{ikx} \quad \forall x \in \mathbb{R}$
$$S_n(x) = \sum_{k=-n}^n c_k e^{ikx}, \quad x \in \mathbb{R}$$
По следствию $c_k = \frac{c_k^{(m)}}{i^m k^m}$
$$|f(x) - S_n(x)| = \left| \sum_{|k| > n} c_k e^{ikx} \right| = \left| \sum_{|k| > n} \frac{c_k^{(m)}}{i^m k^m} e^{ikx} \right| \le \sum_{|k| > n} \frac{|c_k^{(m)}|}{k^m} \le$$
$$\le \sqrt{\sum_{|k| > n} |c_k^{(m)}|^2} \cdot \sqrt{\sum_{|k| > n} \frac{1}{k^{2m}}} = o(1) \text{ при } n \to \infty, \text{ м.к. } \sum_{k \in \mathbb{Z}} |c_k^{(m)}|^2 = \frac{1}{2\pi} \int_{-\pi}^{\pi} |f^{(m)}(x)|^2 dx$$
рав-во Меншуова К.-Б.-Ш.

---

## Page: page_46.png

# Заголовок лекции
$$\sum_{|k|>n} \frac{1}{k^{2m}} = 2 \sum_{k=n+1}^\infty \frac{1}{k^{2m}}$$
$$2 \int_n^\infty \frac{dx}{x^{2m}} = 2 \frac{x^{-2m+1}}{-2m+1}\Big|_n^\infty =$$
$$= -2 \frac{1}{n^{2m-1}(-2m+1)} = \frac{2}{n^{2m-1}(2m-1)}$$
Итого, $\sup_{x \in \mathbb{R}} |f(x) - S_n(x)| \le o(1) \cdot \sqrt{\sum_{|k|>n} \frac{1}{k^{2m}}} \le o(1) \sqrt{\frac{2}{(2m-1)} \frac{1}{n^{2m-1}}} = o\left(\frac{1}{n^{m-\frac{1}{2}}}\right)$

## Преобразование Фурье

Наводящие соображения

Пусть $f$ - $2l$-период. и "хорошая", т.е. $f(x) = \sum_{n \in \mathbb{Z}} c_n e^{\frac{in\pi x}{l}}$

$$c_n = \frac{1}{2l} \int_{-l}^l f(x) e^{-\frac{in\pi x}{l}} dt$$

$l \to \infty$, то $f(x) = \int_{\mathbb{R}} c(y) e^{ixy} dy$, $c(y) = \frac{1}{2\pi} \int_{\mathbb{R}} f(t) e^{-ity} dt$

### Опр.
Пусть $f: \mathbb{R} \to \mathbb{C}$ т., что в т. $x$ $\exists$ интеграл в виде гл. знач. по Коши:

v.p. (value principal) $\int_{-\infty}^\infty f(t) e^{-itx} dt$

Тогда v.p. $\frac{1}{2\pi} \int_{-\infty}^\infty f(t) e^{-itx} dt$ есть преобразование Фурье ф-ции $f$ в точке $x \in \mathbb{R}$.

Обознач.: $\mathcal{F}[f](x) = \frac{1}{2\pi} \int_{\mathbb{R}} f(t) e^{-itx} dt$

$\mathcal{F}_+[f](x)$

$\hat{f}(x)$

Нормир-ое преобр. Фурье: $\mathcal{F}_+[f](x) = \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} f(t) e^{-itx} dt = \lim_{R \to \infty} \frac{1}{\sqrt{2\pi}} \int_{-R}^R f(t) e^{-itx} dt$

Если $\exists$ интеграл $\int_{\mathbb{R}} \hat{f}(x) e^{ixy} dx$, то он наз. интегралом Фурье.


---

## Page: page_47.png

# Примеры:
## §
### Пример
1.  $f(x) = \frac{\sin x}{x}$ - кардинальный синус. = $sinc(x)$ - функция отсчётов
    $$F_t \left[ \frac{\sin t}{t} \right](x) = \frac{1}{2\pi} \lim_{R \to +\infty} \int_{-R}^R \frac{\sin t}{t} e^{-itx} dt = \frac{1}{2\pi} \lim_{R \to +\infty} \int_{-R}^R \frac{\sin t \cos tx}{t} dt = $$
    $$-i \frac{1}{2\pi} \lim_{R \to +\infty} \int_{-R}^R \frac{\sin t \sin tx}{t} dt = \frac{1}{2\pi} \lim_{R \to +\infty} 2 \int_0^R \frac{\frac{1}{2}\sin(t+tx) + \frac{1}{2}\sin(t-tx)}{t} dt = $$
    (нечет. на $[-R; R]$)
    $$= \frac{1}{2\pi} \lim_{R \to +\infty} \left( \int_0^R \frac{\sin((1+x)t}{t} dt - \int_0^R \frac{\sin((1-x)t}{t} dt \right) = \frac{1}{2\pi} \left( \frac{\pi}{2} sgn(1+x) + \frac{\pi}{2} sgn(1-x) \right) =$$
    $$= \frac{1}{4} \left( sgn(1+x) + sgn(1-x) \right) = \begin{cases} \frac{1}{2}, x \in (-1, 1) \\ 0, |x| > 1 \\ \frac{1}{4}, |x| = 1 \end{cases}$$
    \* $\int_0^{+\infty} \frac{\sin pt}{t} dt = \frac{\pi}{2} sgn p$
    *инт. Дирихле*

    $\hat{f}$ имеет компактный носитель, такие ф-ции наз. ф-циями из пр-ва Пэли-Винера.
2.  $f(t) = e^{-\frac{t^2}{2}}, \int_{\mathbb{R}} e^{-\frac{t^2}{2}} dt = \sqrt{2\pi}$
    $$F_t \left[ e^{-\frac{t^2}{2}} \right](x) = \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} e^{-\frac{t^2}{2}} e^{-itx} dt = \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} e^{-\frac{t^2}{2}} \cos(tx) dt = I(x), I(0) = 1$$
    $$I'(x) = \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} e^{-\frac{t^2}{2}} (-\sin tx) \cdot t dt = \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} \sin(tx) de^{-\frac{t^2}{2}} =$$
    $$= \frac{1}{\sqrt{2\pi}} e^{-\frac{t^2}{2}} \sin tx \Big|_{-\infty}^{+\infty} - \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} e^{-\frac{t^2}{2}} \cos(tx) x dt = -x \cdot I, \begin{cases} I' = -xI \\ I(0) = 1 \end{cases}$$
    $$\frac{dI}{I} = -x dx$$

---

## Page: page_48.png

```markdown
#  
$$\ln |I| = -\frac{x^2}{2}, I = ce^{-\frac{x^2}{2}}, I(0) = 1 \Rightarrow c_1 = 1$$
т.о. норм-ое преобр. Фурье $\mathcal{F}_+[e^{-\frac{x^2}{2}}](x) = e^{-\frac{x^2}{2}}$
### Опр.
Пусть $f: \mathbb{R}^n \to \mathbb{C}$. Преобразованием Фурье будем называть
$$\mathcal{F}_+[f](x) = \frac{1}{(2\pi)^{n/2}} \lim_{\substack{R_1 \to +\infty \\ \vdots \\ R_n \to +\infty}} \int_{-R_1}^{R_1} ... \int_{-R_n}^{R_n} f(t) e^{-i(x, t)} dt$$
$$dt = dt_1, dt_2 ... dt_n$$
$$(t, x) = t_1x_1 + ... + t_nx_n$$
### Предложение (о свойствах $\mathcal{F}_+$)
Пусть $f \in L_1(\mathbb{R}^n)$, тогда $\mathcal{F}_+[f] \in C(\mathbb{R}^n)$
$$\|\mathcal{F}_+[f]\|_\infty \le \frac{1}{(2\pi)^{n/2}} \|f\|_1, u \mathcal{F}_+[f](x) \to 0 \text{ при } \|x\| \to \infty$$
### Доказательство
1) $\mathcal{F}_+[f](x) = \frac{1}{(2\pi)^{n/2}} \int_{\mathbb{R}^n} f(t) e^{-i(t, x)} dt$
$$\forall t \in \mathbb{R}^n \text{ ф-ция } f(t) e^{-i(t, x)} \text{ - непрер. по } x \in \mathbb{R}$$
$$|f(t)e^{-i(t, x)}| \le |f(t)| \text{ и } \int_{\mathbb{R}^n} |f(t)| dt < \infty$$
$$\Rightarrow \text{ по теореме о непр. ИЗоП } \mathcal{F}_+ \text{ - непрер. }$$
2) $\|\mathcal{F}_+[f]\|_\infty = \sup_{x\in \mathbb{R}} |\frac{1}{(2\pi)^{n/2}} \int_{\mathbb{R}^n} f(t) e^{-i(x, t)} dt | \le $$
$$\le (2\pi)^{-n/2} \|f\|_1$$
3) По лемме Римана-Лебега.

# 14/03/24
## Теорема (о сходимости интеграла Фурье)
Пусть $f \in L_1(\mathbb{R})$ и в точке $x \in \mathbb{R}$ выполн. усл. Дини. Тогда
$$v.p. \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} \mathcal{F}_+[f](y) e^{ixy} dy = \frac{f(x+0) + f(x-0)}{2}$$
### Доказательство
Будем искать предел $\lim_{R \to +\infty} \frac{1}{\sqrt{2\pi}} \int_{-R}^{R} \mathcal{F}_+[f](y) e^{ixy} dy$
$$\frac{1}{\sqrt{2\pi}} \int_{-R}^{R} (\int_{\mathbb{R}} f(t) e^{-ity} dt) e^{ixy} dy \overset{\text{т. Фубини}}{=} \frac{1}{2\pi} \int_{\mathbb{R}} f(t) (\int_{-R}^{R} e^{i(x-t)y} dy) dt \equiv $$
(Двойной $\exists \Rightarrow$ сущ. повторнее)
```

---

## Page: page_49.png

```markdown
$$\iint_{\mathbb{R} \times [-R, R]} |f(t)e^{-ity} e^{ixy}| dt dy = \int_{-R}^R \left( \int_{-R}^R |f(t)| dt \right) dy = 2R ||f||_1 < \infty$$
*ш. Тоннели*
$$\stackrel{\ominus}{=} \frac{1}{2\pi} \int_\mathbb{R} f(t) \frac{e^{i(x-t)y}}{i(x-t)} \bigg|_{y = -R}^{y = R} dt = \frac{1}{2\pi} \int_\mathbb{R} f(t) \frac{e^{i(x-t)R} - e^{-i(x-t)R}}{i(x-t)} dt = \frac{1}{\pi} \int_\mathbb{R} f(t) \frac{\sin((x-t)R)}{x-t} dt = $$
$$= \begin{cases} x - t = s \\ t = x - s \end{cases} = \frac{1}{\pi} \int_\mathbb{R} f(x-s) \frac{\sin(sR)}{s} ds = \frac{1}{\pi} \int_{-\infty}^0 f(x-s) \frac{\sin(sR)}{s} ds + \frac{1}{\pi} \int_0^{+\infty} f(x-s) \frac{\sin(sR)}{s} ds = $$
$$\begin{matrix}
\uparrow \\ -s = t
\end{matrix} замена \begin{matrix}
\uparrow \\ s = t
\end{matrix}$$
$$= \frac{1}{\pi} \int_0^{+\infty} (f(x-t) + f(x+t)) \frac{\sin(tR)}{t} dt = \frac{1}{\pi} \int_0^{+\infty} \frac{f(x-t) - f(x+0)}{t} \sin(Rt) dt + \frac{1}{\pi} \int_0^{+\infty} \frac{f(x+t) - f(x+0)}{t} \sin(Rt) dt + $$
$$+ \frac{1}{\pi} \int_0^{+\infty} \frac{f(x+0) + f(x-0)}{t} \sin(Rt) dt$$
$$I_1 \qquad I_2 \qquad I_3$$
$$\lim_{R \to +\infty} I_3 = \lim_{R \to +\infty} \frac{1}{\pi} f(x+0) + f(x-0) \cdot \int_0^{+\infty} \frac{\sin(Rt)}{t} dt = \frac{f(x+0) + f(x-0)}{2}$$
$$\underbrace{\frac{\pi}{2} sgn(R)}_{}$$
$$\lim_{R \to +\infty} I_{1, 2} = \lim_{R \to +\infty} \frac{1}{\pi} \int_0^{+\infty} \frac{f(x \pm t) - f(x \pm 0)}{t} \sin(Rt) dt = \lim_{R \to +\infty} \frac{1}{\pi} \int_0^{\varepsilon} \frac{f(x \pm t) - f(x \pm 0)}{t} \sin(Rt) dt + $$
$$\underbrace{}_{g_x(t)}$$
$$+ \lim_{R \to +\infty} \int_\varepsilon^{+\infty} "[НРЗБ]" 0$$
$$no \ n.P. - n. \ m.k. \ \int_0^{\varepsilon} |g_x(t)| dt < \infty$$
$$\int_0^\varepsilon |\frac{f(x \pm t) - f(x \pm 0)}{t}| dt < \infty \qquad \text{усл. Дини}$$
$$\int_\varepsilon^{+\infty} (f(x \pm t) - f(x \pm 0)) \frac{\sin(Rt)}{t} dt = \int_\varepsilon^{+\infty} \underbrace{\frac{f(x \pm t)}{t}}_{\varphi_x(t)} \sin(Rt) dt - f(x \pm 0) \int_\varepsilon^{+\infty} \frac{\sin(Rt)}{t} dt$$
$$\int_\varepsilon^{+\infty} |\varphi_x(t)| dt \le \frac{1}{\varepsilon} \int_\varepsilon^{+\infty} |f(x \pm t)| dt \le \frac{1}{\varepsilon} ||f||_1 < \infty$$
$$R \to +\infty$$
$$RE \to 0$$
*т.к. инт.*
*сходится*
*(хвост $\to 0$)*

### Следствие
если $f \in L_1(\mathbb{R})$, $f$ *непр.* и имеет *одност. пр-ые (конечные)*, то

$$\star f(x) = \frac{1}{\sqrt{2\pi}} \int_\mathbb{R} \mathcal{F}_+[f](y) e^{ixy} dy \quad \forall x \in \mathbb{R}.$$
```

---

## Page: page_5.png

# 
$$ \frac{\Gamma(x+1)}{(\frac{x}{e})^x \sqrt{2x}} = \int_{-\sqrt{\frac{x}{2}}}^{+\infty} (1 + s\sqrt{\frac{x}{x}})^x e^{-s\sqrt{2x}} ds = \int_{-y}^{+\infty} (1 + \frac{s}{y})^{2y^2} \cdot e^{-s \cdot 2y} ds = $$
$$ = \int_{-y}^{+\infty} \left( \frac{(1 + \frac{s}{y})^y}{e^s} \right)^{2y} ds \underset{y \to \infty}{\longrightarrow} \int_{-\infty}^{+\infty} e^{-s^2} ds = \sqrt{\pi} $$
$$ \int_{-y}^{+\infty} \left( \frac{(1 + \frac{s}{y})^y}{e^s} \right)^{2y} ds = \int_{\mathbb{R}} \chi_{(-y; +\infty)}(s) \cdot \left( \frac{(1 + \frac{s}{y})^y}{e^s} \right)^{2y} ds $$
[Рисунок: стрелка вниз]
$e^{-s^2}$
[Рисунок: стрелка вверх]
$$ \lim_{y \to +\infty} \ln \left( \frac{(1 + \frac{s}{y})^y}{e^s} \right)^{2y} = \lim_{y \to +\infty} 2y \left( y \ln(1 + \frac{s}{y}) - s \right) = \lim_{y \to +\infty} \frac{y \ln(1 + \frac{s}{y}) - s}{\frac{1}{2y}} = \left< \frac{0}{0} \right> = $$
$$ \frac{1}{\frac{s}{y}} = z $$
$$ = \lim_{z \to 0} 2 \frac{\frac{1}{z} \ln(1 + sz) - s}{\frac{1}{z}} = \lim_{z \to 0} 2 \frac{\ln(1 + sz) - sz}{z^2} = \lim_{z \to 0} 2 \frac{\frac{s}{1 + sz} - s}{2z} = $$
$$ = \lim_{z \to 0} \frac{s - s - s^2 z}{1 + sz} \cdot \frac{1}{z} = -s^2 $$
Ищем снитет. мажоранту

## §
### Опр.
08.02.24
$$ \frac{\Gamma(x)}{(\frac{x}{e})^x \sqrt{2\pi x}} \underset{x \to +\infty}{\longrightarrow} 1 $$
$$ \frac{\Gamma(x)}{(\frac{x}{e})^x \sqrt{2x}} = \int_{-y}^{+\infty} \left( \frac{(1 + \frac{s}{y})^y}{e^s} \right)^{2y} ds \underset{y \to +\infty}{\longrightarrow} \int_{-\infty}^{+\infty} e^{-s^2} ds = \sqrt{\pi} $$
$$ \mathbb{R} \int \left( \frac{(1 + \frac{s}{y})^y}{e^s} \right)^{2y} \cdot \chi_{(-y; +\infty)}(s) ds $$
(доказали)

Нужно найти мажоранту для $\left( \frac{(1 + \frac{s}{y})^y}{e^s} \right)^{2y} \cdot \chi_{(-y; +\infty)}(s) \le g(s) \quad \forall s \in \mathbb{R}$

Будем считать, что $y > 1$. Тогда
$$ \left( \frac{(1 + \frac{s}{y})^y}{e^s} \right)^{25} \overset{?}{\le} \begin{cases} (1 + s)^2 e^{-2s}, \quad s > 0 \\ e^{-s^2}, \quad -y < s < 0 \end{cases} \Rightarrow g(s) = \begin{cases} (1 + s)^2 e^{-2s}, \quad s > 0 \\ e^{-s^2}, \quad s < 0 \end{cases} \in L_1(\mathbb{R}, ds) $$
- это функц. от $y$ будет убыв. при $y = 1$ max
- $s < 0$, то будет возрасти. max при $y \to +\infty$
упр.

---

## Page: page_50.png

#  
$$
\mathbb{F}_\pm[f(t)](x) = \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} f(t) e^{\mp ixt} dt, \quad \text{ обозн. } \overset{\vee}{f}(x)
$$
### Опр. Обратным преобр. Фурье наз.

**Формула**
$$
f(x) = \mathbb{F}_-[\mathbb{F}_+[f]](x) = \mathbb{F}_+[\mathbb{F}_-[f]](x)
$$
м.к. $\mathbb{F}_+[f](-x) = \mathbb{F}_-[f](x)$.

### Теорема (о преобр. Фурье для производных)

1) Пусть $f \in L_1(\mathbb{R})$ такая, что ее пр-ные $f', f'', ..., f^{(m)} \in L_1(\mathbb{R})$.
Тогда
$$
\mathbb{F}_\pm [f^{(k)}(t)](x) = (\pm ix)^k \cdot \mathbb{F}_\pm [f(t)](x) \qquad 1 \le k \le m
$$
2) Пусть $f : \mathbb{R}^n \to \mathbb{C}$ и $\forall$ мультииндекса $0 \le |\alpha| \le m \quad D^\alpha f \in L_1(\mathbb{R}^n)$
тогда $\forall |\alpha| \le m$
$$
\mathbb{F}_\pm [D^\alpha f](x) = (\pm ix)^\alpha \mathbb{F}_\pm [f](x)
$$
*Операционное исчисление прим. в диф-ах*

### Доказательство

1) Покажем, что $\forall 0 \le k \le m-1$:
$$
f^{(k)}(x) \underset{|x| \to +\infty}{\to} 0
$$
$$
f(x) = f(0) + \int_0^x f'(t) dt,
$$
$$
\lim_{x \to \pm \infty} \int_0^x f'(t) dt \in \mathbb{R}, \quad \text{м.к.} \int_{\mathbb{R}} |f'(t)| dt < \infty
$$
$$
\Rightarrow \lim_{x \to \pm \infty} f(x) \in \mathbb{R} \quad \text{м.к.} \quad f \in L_1(\mathbb{R}), \text{ то } f(\pm \infty) = 0
$$
(д-пи, что ф-ции на бескон. ведут себя "хорошо")

2)
$$
\mathbb{F}_\pm [f^{(k)}(t)](x) = \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} f^{(k)}(t) e^{\mp i tx} dt = \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} e^{\mp i tx} df^{(k-1)}(t) = \frac{1}{\sqrt{2\pi}} \left. e^{\mp i tx} f^{(k-1)}(t) \right|_{t = -\infty}^{t = +\infty} - \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} f^{(k-1)}(t) (\mp i x) e^{\mp i tx} dt = (\pm ix) \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} f^{(k-1)}(t) e^{\mp i tx} dt = ... = (\pm ix)^k \mathbb{F}_\pm [f(t)](x)
$$
*по частям*
$$
\underbrace{\left. e^{\mp i tx} f^{(k-1)}(t) \right|_{t = -\infty}^{t = +\infty}}_{0} \quad \text{м.к.} \quad f^{(k-1)}(\pm \infty) = 0
$$
*K-1 раз*

3)
$$
\mathbb{F}_\pm [D^\alpha f(t)](x) = (2\pi)^{-\frac{n}{2}} \int_{\mathbb{R}^{n-1}} e^{\mp i(t_1 x_1 + \dots + t_{n-1} x_{n-1})} \left[ \int_{\mathbb{R}} \frac{\partial^{|\alpha|}}{\partial x_n^{\alpha_n}} (D^{\tilde{\alpha}} f) e^{\mp i t_n x_n} dt_n \right] dt_1 ... dt_{n-1} =
$$
$$
\tilde{\alpha} = (\alpha_1, ..., \alpha_{n-1}, 0)
$$

---

## Page: page_51.png

$$
=(2\pi)^{-\frac{n}{2}} \int_{\mathbb{R}^{n-1}} e^{\mp i (t_1x_1 + \dots + t_{n-1}x_{n-1})} \left( \int_{\mathbb{R}} (\pm ix_n)^{d_n} \tilde{D}^\alpha f dt_n \right) dt_1 \dots dt_{n-1} = \dots =
$$
$$
=(\pm ix_n)^{d_n} \cdot (\pm ix_{n-1})^{d_{n-1}} \dots (\pm ix_1)^{d_1} \mathcal{F}_\pm[f](x) = (\pm ix)^\alpha \mathcal{F}_\pm[f](x).
$$
*инд. рассужд.*

### Теорема (о дисф-ии преобразования Фурье)
Пусть $f: \mathbb{R}^n \to \mathbb{C}$ такая, что $\forall$ мультииндекса $0 \le |\alpha| \le m$:
$$
x^\alpha f(x) \in L_1(\mathbb{R}^n).
$$
Тогда $\mathcal{F}_\pm[f] \in C^{(m)}(\mathbb{R}^n)$ и
$$
\forall |\alpha| \le m \quad D^\alpha \mathcal{F}_\pm[f](x) = \mathcal{F}_\pm[ (\mp i t)^\alpha f(t)](x).
$$

### Доказательство
$$
D_x^\alpha \left( (2\pi)^{-\frac{n}{2}} \int_{\mathbb{R}^n} f(t) e^{\mp i (x, t)} dt \right) = (2\pi)^{-\frac{n}{2}} \int_{\mathbb{R}^n} f(t) D_x^\alpha e^{\mp i (x, t)} dt
$$
$$
D_x^\alpha e^{\mp i (t, x)} = e^{\mp i (t, x)} \cdot (\mp i t)^\alpha \quad u \quad \left| \int f(t) e^{\mp i (t, x)} \cdot (\mp i t)^\alpha \right| \le |f(t) \cdot t^\alpha| \in L_1(\mathbb{R}^n)
$$
$$
\implies \mathcal{F}_\pm \left[ (\mp i t)^\alpha f(t) \right](x)
$$

## Быстроубывающие функции

### Опр.
Функция $f: \mathbb{R}^n \to \mathbb{C}$ наз. *быстроубывающей* (б.у.) или принадлежащей классу Шварца $S(\mathbb{R}^n)$, если
- 1) $f \in C^\infty (\mathbb{R}^n)$
- 2) $\forall \alpha, \beta$ - мультииндексов $\exists C_{\alpha \beta} > 0$:
$$
\sup_{x \in \mathbb{R}^n} |x^\alpha D^\beta f(x)| \le C_{\alpha \beta} < \infty
$$

### Примеры:
- 1) $C_0^\infty (\mathbb{R}^n) \subset S(\mathbb{R}^n)$
- 2) $e^{-(x_1^2 + \dots + x_n^2)} = e^{-||x||^2} \in S(\mathbb{R}^n)$
- 3) $e^{-|x|} \notin S(\mathbb{R})$

### Теорема (о свойствах $S(\mathbb{R}^n)$)
- 1) $\forall f, g \in S(\mathbb{R}^n) \quad a \cdot f + b \cdot g \in S(\mathbb{R}^n) \quad \forall a, b \in \mathbb{C}$
(алгебра) $\qquad \qquad \qquad \qquad \qquad f \cdot g \in S(\mathbb{R}^n)$
$\forall$ полинома $P(x) \quad P(x) \cdot f \in S(\mathbb{R}^n)$
- 2) $\forall f \in S(\mathbb{R}^n) \quad \mathcal{F}_\pm[f] \in S(\mathbb{R}^n), \forall \alpha \quad D^\alpha f \in S(\mathbb{R}^n)$


---

## Page: page_52.png

# 18/03/24
## § [Без названия]
### Доказательство:
1) $\forall \alpha, \beta$-мультиинд. $\sup_{x \in \mathbb{R}^n} |x^\alpha D^\beta (af + bg)| \le |a| \sup_{x \in \mathbb{R}^n} |x^\alpha D^\beta f| + |b| \sup_{x \in \mathbb{R}^n} |x^\alpha D^\beta g| < \infty$
$\sup_{x \in \mathbb{R}^n} |x^\alpha D^\beta (f \cdot g)| \le \sum_{0 \le \gamma \le \beta} C_p^\gamma \sup_{x \in \mathbb{R}^n} |x^\alpha D^\gamma f \cdot D^{\beta - \gamma} g| \le \sum_{0 \le \gamma \le \beta} \sup_{x \in \mathbb{R}^n} |x^\alpha D^\gamma f| \cdot \sup_{x \in \mathbb{R}^n} |D^{\beta - \gamma} g| < \infty$

$$D^\beta (f \cdot g) = \sum_{0 \le \gamma \le \beta} C_p^\gamma D^\gamma f D^{\beta - \gamma} g \text{ (многомерная ф-ла Лейбница)}$$
$\sup_{x \in \mathbb{R}^n} |x^\alpha D^\beta (P(x) \cdot f(x))| \le \sum_{0 \le \gamma \le \beta} C_p^\gamma \sup_{x \in \mathbb{R}^n} |x^\alpha D^\gamma P \cdot D^{\beta - \gamma} f| \le \sum_{0 \le \gamma \le \beta} \sum_{|\delta| \le N} C_p^\gamma |c_\delta| \cdot \sup_{x \in \mathbb{R}^n} |x^{\alpha + \delta} D^{\beta - \gamma} f| < \infty$
$$D^\gamma P - \text{полином} = \sum_{|\delta| \le N} c_\delta x^\delta$$
2) $\sup_{x \in \mathbb{R}^n} |x^\alpha D^\beta (\mathcal{F}_\pm[f])| = \sup_{x \in \mathbb{R}^n} |x^\alpha \mathcal{F}_\pm [( \mp it)^\beta f(t)](x)|$
$g(t) \in \mathcal{S}(\mathbb{R}^n)$
$\forall \alpha, \beta$-мультиинд.
Имеем, $\forall \alpha, \beta$-мульти. $\sup_{x \in \mathbb{R}^n} |x^\alpha D^\beta f(x)| < \infty$
Надо д-ть, что $\sup_{x \in \mathbb{R}^n} |x^\alpha D^\beta (\mathcal{F}_\pm [f])| < \infty$
$$|x^\alpha D^\beta \mathcal{F}_\pm [f](y)(x)| \overset{**}{=} |x^\alpha \mathcal{F}_\pm [(\mp iy)^\beta f(y)](x)| \overset{\oplus}{=} |(\pm ix)^\alpha \mathcal{F}_\pm [(\mp iy)^\beta f(y)](x)| = $$
$$= |\mathcal{F}_\pm [D^\alpha (y^\beta f(y)](x)| \le (2\pi)^{-\frac{n}{2}} ||D^\alpha (y^\beta f(y)||_1 < \infty.$$
$$\underbrace{\mathcal{S}(\mathbb{R}^n)}_{\in \mathcal{S}(\mathbb{R}^n)}$$
$$\underbrace{\mathcal{S}(\mathbb{R}^n)}_{\text{из т. о непр. преобр. Фурье}}$$
$$\mathcal{S}(\mathbb{R}^n) \subset L_1(\mathbb{R}^n)$$

$$D^\alpha \mathcal{F}_\pm[f(y)](x) = \mathcal{F}_\pm[(\mp iy)^\alpha f(y)](x)$$
$$\mathcal{F}_\pm [D^\alpha f](x) = (\pm ix)^\alpha \mathcal{F}_\pm [f](x)$$

### Замечание:
В $\mathcal{S}(\mathbb{R}^n)$ также справедливо:
1) $f * g \in \mathcal{S}(\mathbb{R}^n)$, если $f, g \in \mathcal{S}(\mathbb{R}^n)$.
2) $\mathcal{F}_\pm [\mathcal{F}_\mp [f]](x) = f(x) \quad \forall x \in \mathbb{R}^n, \forall f \in \mathcal{S}(\mathbb{R}^n)$.
т.е. $\mathcal{F}_- = \mathcal{F}_+^{-1}$ на $\mathcal{S}(\mathbb{R}^n)$.


---

## Page: page_53.png

# Теорема (сф-па Бореля для преобр. Фурье свёртки)
1) Пусть $f, g \in L_1(\mathbb{R}^n)$, тогда $\mathcal{F}_{\pm}[f * g](x) = (2\pi)^{\frac{n}{2}} \mathcal{F}_{\pm}[f](x) \cdot \mathcal{F}_{\pm}[g](x)$
2) Пусть $f, g \in S(\mathbb{R}^n)$, тогда $\mathcal{F}_{\pm}[f \cdot g](x) = (2\pi)^{-\frac{n}{2}} (\mathcal{F}_{\pm}[f] * \mathcal{F}_{\pm}[g])(x)$.

### Доказательство
1) Т.к. $f * g \in L_1(\mathbb{R}^n)$
$$\mathcal{F}_{\pm}[f * g](x) = \frac{1}{(2\pi)^{\frac{n}{2}}} \int_{\mathbb{R}^n} (f * g)(y) e^{\mp i(x, y)} dy =$$
$$= \frac{1}{(2\pi)^{\frac{n}{2}}} \int_{\mathbb{R}^n} \left( \int_{\mathbb{R}^n} f(y - z)g(z) dz \right) e^{\mp i(x, y)} dy = \frac{1}{(2\pi)^{\frac{n}{2}}} \int_{\mathbb{R}^n} g(z) \left( \int_{\mathbb{R}^n} f(y - z)e^{\mp i(y, x)} dy \right) dz \stackrel{\text{т. Фубини}}{=}$$
$$\int_{\mathbb{R}^n} \int_{\mathbb{R}^n} |f(y-z)g(z)e^{\mp i(y,x)}| dz dy \le \|f\|_1 \|g\|_1 < \infty$$
$$\stackrel{\begin{cases} y - z = \vartheta \\ dy = d\vartheta \end{cases}}{=} \frac{1}{(2\pi)^{\frac{n}{2}}} \int_{\mathbb{R}^n} g(z) \int_{\mathbb{R}^n} f(\vartheta) e^{\mp i(z + \vartheta, x)} d\vartheta dz = \frac{1}{(2\pi)^{\frac{n}{2}}} \int_{\mathbb{R}^n} f(\vartheta) e^{\mp i(\vartheta, x)} d\vartheta \cdot \int_{\mathbb{R}^n} g(z) e^{\mp i(z, x)} dz =$$
$$= (2\pi)^{\frac{n}{2}} \mathcal{F}_{\pm}[f](x) \cdot \mathcal{F}_{\pm}[g](x).$$
2) Пусть $\tilde{f} = \mathcal{F}_{\pm}[f]$
$\tilde{g} = \mathcal{F}_{\pm}[g]$.

Тогда по док-ой формуле: $\mathcal{F}_{\pm}[\tilde{f} * \tilde{g}](x) = (2\pi)^{\frac{n}{2}} \mathcal{F}_{\pm}[\tilde{f}](x) \cdot \mathcal{F}_{\pm}[\tilde{g}](x)$
$$f \cdot g = (2\pi)^{-\frac{n}{2}} \mathcal{F}_{\pm}[\tilde{f} * \tilde{g}](x)$$
$$\Rightarrow \mathcal{F}_{\pm}[f \cdot g](x) = (2\pi)^{-\frac{n}{2}} (\tilde{f} * \tilde{g})(x) = (2\pi)^{-\frac{n}{2}}(\mathcal{F}_{\pm}[f] * \mathcal{F}_{\pm}[g])(x)$$
$\underbrace{\mathcal{F}_{\pm}[\tilde{f}]}_{f} \underbrace{\mathcal{F}_{\pm}[\tilde{g}]}_{g}$

### Пример применения св-в преобразования Фурье
Уравнение теплопроводности
$$u = u(x, t), \quad x \in \mathbb{R}^n, \quad t \ge 0$$
$$\begin{cases}
u(x, 0) = f(x) \\
u'_t = a \Delta u = a \left( \frac{\partial^2 u}{\partial x_1^2} + \dots + \frac{\partial^2 u}{\partial x_n^2} \right)
\end{cases}$$
Предполагаем, что $f \in S(\mathbb{R}^n)$ быстроубыв.
$$\vartheta(x, t) = \mathcal{F}_{\pm}[u(y, t)](x)$$
по пространственной перем.

---

## Page: page_54.png

```markdown
# Лекция (Дата, Глава)
$$
\begin{cases}
\vartheta(x, 0) = \hat{f}(x) \\
\vartheta'_t = a F + [\Delta u] = a F_t L D_u^{(2, 0, -0)} + ... + D_u^{(9, ..., 2)}) = a(ix_1)^2 F_t[u](x) + (ix_2)^2 F_t[u](x) + ... + (ix_n)^2 F_t[u](x)
\end{cases}
$$
$$
\begin{cases}
\vartheta(x, 0) = \hat{f}(x) \\
\vartheta_t(x, t) = -a ||x||^2 \vartheta(x, t)
\end{cases}
$$
$$
\vartheta(x, t) = c(x) e^{-a||x||^2 t}
$$
$$
\vartheta(x, 0) = c(x) = \hat{f}(x)
$$
$$
\vartheta(x, t) = \hat{f}(x) e^{-a||x||^2 t}
$$
$$
\Rightarrow u(x, t) = F_{-}[\hat{f}(y) \cdot e^{-a||y||^2 t}](x) = (2\pi)^{-\frac{n}{2}} (F_{-}[\hat{f}] * F_{-}[e^{-a||y||^2 t}])(x) \Leftrightarrow
$$
Знаем, что $F_{\pm} [e^{-\frac{y^2}{2}}](x) = e^{-\frac{x^2}{2}}$
Введем формулу:
$$
F_{\pm} [f(by)](x) = \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} f(by) e^{\mp ixy} dy =
\begin{cases}
by = z \\
y = \frac{z}{b} \\
dy = \frac{dz}{b}
\end{cases}
= \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} f(z) e^{\mp ix \frac{z}{b}} \frac{dz}{b} =
$$
$$
f \in L_1(\mathbb{R}), b > 0
$$
$$
= \frac{1}{b} F_{\pm} [f(z)](\frac{x}{b})
$$
$$
F_{\pm} [e^{-2at+\frac{y^2}{2}}](x) = \frac{1}{\sqrt{2at}} F_{\pm} [e^{-\frac{y^2}{2}}](\frac{x}{\sqrt{2at}}) = \frac{1}{\sqrt{2at}} e^{-\frac{x^2}{4at}}
$$
$$
\Leftrightarrow (2\pi)^{-\frac{n}{2}} f * (\frac{1}{\sqrt{2at}} e^{-\frac{x_1^2}{4at}} \cdot \frac{1}{\sqrt{2at}} e^{-\frac{x_2^2}{4at}} ... \frac{1}{\sqrt{2at}} e^{-\frac{x_n^2}{4at}}) = \frac{1}{(2\pi \cdot 2at)^{\frac{n}{2}}} \int_{\mathbb{R}} f(x-y) e^{-\frac{||y||^2}{4at}} dy
$$
*упр* проверить, подст. в ур-ие и нач. усл.

### Теорема (формула Пуассона)
Пусть $f \in S(\mathbb{R})$, тогда $\forall x \in \mathbb{R}$
$$
\sqrt{2\pi} \sum_{n \in \mathbb{Z}} f(x + 2\pi n) = \sum_{n \in \mathbb{Z}} \hat{f}(n) e^{inx}
$$

*Док-во:* Пусть $F(x) = \sqrt{2\pi} \sum_{n \in \mathbb{Z}} f(x + 2\pi n)$

Ясно, что $F: \mathbb{R} \to \mathbb{C}, F \in C^{\infty}(\mathbb{R}, \mathbb{C})$
т.к. ряд $\sum_{n \in \mathbb{Z}} f^{(k)}(x + 2\pi n)$ сходится равномерно на $\mathbb{R}$
$$
(|f^{(k)}(x + 2\pi n)| \le \frac{c}{1 + (x + 2\pi n)^2})
$$
```

---

## Page: page_55.png

#  
$$F(x+2\pi) = F(x)$$ - $2\pi$ периодич.
$$\sqrt{2\pi} \sum_{n \in \mathbb{Z}} f(x+2\pi + 2\pi n)$$
$$2\pi(n+1)$$
$$\Rightarrow \forall x \in \mathbb{R}\ F(x) = \sum_{n \in \mathbb{Z}} c_n e^{inx}, \text{ где } c_n = \frac{1}{2\pi} \int_{-\pi}^{\pi} F(x) e^{-inx} dx$$
Осталось показать, что $c_n = \hat{f}(n)$.
$$c_n = \frac{1}{2\pi} \int_{-\pi}^{\pi} F(x) e^{-inx} dx = \frac{1}{\sqrt{2\pi}} \int_{-\pi}^{\pi} \sum_{n \in \mathbb{Z}} f(x+2\pi k) e^{-inx} dx = \frac{1}{\sqrt{2\pi}} \sum_{k \in \mathbb{Z}} \int_{-\pi}^{\pi} f(x+2\pi k) e^{-inx} dx =$$
$$\uparrow$$
м.к. ряд сх. равномерно
$$x+2\pi k = y$$
$$dx=dy$$
$$= \frac{1}{\sqrt{2\pi}} \sum_{k \in \mathbb{Z}} \int_{-\pi + 2\pi k}^{\pi + 2\pi k} f(y) e^{-in(y-2\pi k)} dy = \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} f(y) e^{-iny} dy = \hat{f}(n)$$
$$e^{-iny} \cdot e^{i2\pi kn}$$
$$= 1$$

### Теорема (Котельникова-Шеннона-Уиттекера)
Пусть $f \in \mathcal{S}(\mathbb{R})$ такая, что $\exists a > 0:\ supp\ \hat{f} \subset [-a, a]$.
Тогда $\forall x \in \mathbb{R}$
$$f(x) = \sum_{n \in \mathbb{Z}} f\left(\frac{\pi n}{a}\right) sinc(\pi n - ax).$$

### Доказательство
$$f(x) = \mathcal{F}^{-1}[\mathcal{F}[f]](x) = \frac{1}{\sqrt{2\pi}} \int_{\mathbb{R}} \hat{f}(y) e^{iyx} dy = \frac{1}{\sqrt{2\pi}} \int_{-a}^{a} \hat{f}(y) e^{iyx} dy = \Theta$$

[Рисунок]

$$\hat{f}(y) = \sum_{n \in \mathbb{Z}} c_n e^{\frac{i\pi n y}{a}}$$
$$c_n = \frac{1}{2a} \int_{-a}^{a} \hat{f}(z) e^{\frac{i\pi n z}{a}} dz$$
$$\Theta \frac{1}{\sqrt{2\pi}} \int_{-a}^{a} \sum_{n \in \mathbb{Z}} c_n e^{\frac{i\pi n y}{a}} e^{iyx} dy = \frac{1}{\sqrt{2\pi}} \sum_{n \in \mathbb{Z}} c_n \int_{-a}^{a} e^{iy(\frac{\pi n}{a}-x)} dy = \Theta$$
$$\sum_{n \in \mathbb{Z}} |c_n| < \infty$$
$$e^{iy(\frac{\pi n}{a}-x)}\Big|_{y=-a}^{y=a} = a \frac{e^{i(\pi n-ax)} - e^{-i(\pi n - ax)}}{i(\pi n - ax)} =$$
$$\Theta \frac{1}{\sqrt{2\pi}} \sum_{n \in \mathbb{Z}} c_n 2a \ sinc (\pi n - ax) =$$
$$2a sinc (\pi n - ax)$$

---

## Page: page_56.png

# Лекция (Дата [НРЗБ])
Осталось показать, что $\frac{c_n \cdot 2a}{\sqrt{2\pi}} = f(\frac{\pi n}{a})$
$$\frac{c_n \cdot 2a}{\sqrt{2\pi}} = \frac{1}{\sqrt{2\pi}} \int_{-a}^a \hat{f}(z) e^{-\frac{\pi i n z}{a}} dz = \frac{1}{\sqrt{2\pi}} \int_\mathbb{R} \hat{f}(z) e^{\frac{i\pi nz}{a}} dz = \check{\hat{f}} (\frac{\pi n}{a}) = f(\frac{\pi n}{a})$$
### Следствие:
Пусть $f \in C_0^\infty (\mathbb{R})$, тогда $\mathcal{F}[f] \notin C_0^\infty (\mathbb{R})$
*Док-во: от противного: supp $\hat{f}(y) \subset [-a, a]$, тогда по m. K-[НРЗБ]-Ч
$$f(x) = \sum_{n \in \mathbb{Z}} f(\frac{\pi n}{a}) \text{sinc}(\pi n - ax)$$
$$\exists N_0 : \forall |n| > N_0 \quad \frac{\pi n}{a} \notin \text{supp }f$$
$$f(x) = \sum_{n = -N}^N f(\frac{\pi n}{a}) \text{sinc}(\pi n - ax) \notin C_0$$
21/03/24
### Замечание:
$$f(x) = \sum_{n \in \mathbb{Z}} f(\frac{\pi n}{a}) \text{sinc}(\pi n - ax), \quad \hat{f}(x) \neq 0 \quad \forall x \in [-a, a].$$
Формула справедлива $\forall f \in L_2(\mathbb{R}) \cap C(\mathbb{R})$ и ряд сходится равномерно на $\mathbb{R}$, а также по норме в $L_2(\mathbb{R})$.

Преобразование Фурье в $L_2(\mathbb{R}^n)$

### Теорема (равенство Парсеваля для преобр. Фурье)
Пусть $f, g \in L_1(\mathbb{R}^n)$. Тогда
$$\int_{\mathbb{R}^n} f(x) \hat{g}(x) dx = \int_{\mathbb{R}^n} \hat{f}(x) g(x) dx.$$
Аналогично, для обр. преобр. Фурье.
### Доказательство:
Оба интеграла $\exists$, т.к. $\hat{f} \in C_b(\mathbb{R})$
м.е. $\left| \int_{\mathbb{R}^n} \hat{f}(x) g(x) dx \right| \le ||\hat{f}||_\infty \cdot ||g||_1 < \infty$ непр. и огр. функции

Тогда $$\int_{\mathbb{R}^n} f(x) \hat{g}(x) dx = \int_{\mathbb{R}^n} f(x) \left( \frac{1}{(2\pi)^{n/2}} \int_{\mathbb{R}^n} g(y) e^{-i(x, y)} dy \right) dx =$$
$$\overset{\uparrow}{\text{т. Фубини}} \int_{\mathbb{R}^n} g(y) \left( \frac{1}{(2\pi)^{n/2}} \int_{\mathbb{R}^n} f(x) e^{-i(x, y)} dx \right) dy = \int_{\mathbb{R}^n} g(y) \hat{f}(y) dy.$$
т.к. $\iint_{\mathbb{R}^{2n}} |f(x) g(y) e^{-i(x, y)}| dxdy \le ||f||_1 ||g||_1 < \infty$

### Следствие 1.
$\forall f, g \in \mathcal{S}(\mathbb{R}^n)$
$L_2$-гильб. пр-во

---

## Page: page_57.png

# Заголовок лекции (НРЗБ)
$$(f, g)_2 = (\hat{f}, \hat{g})_2 = (\check{f}, \check{g})_2$$
$$(f, g)_2 = \int_{\mathbb{R}^n} f(x) \overline{g(x)} dx$$
### Док-во
$$\overline{\overline{f}(x)} = \check{f}(x)$$
$$\hat{\check{f}}(x) = f(x) \quad \forall x \in \mathbb{R}^n$$
(Быстроуб. ф-ии во всех точках удовл. усл. Дини)
Тогда
$$(f, g)_2 = \int_{\mathbb{R}^n} f(x) \overline{g(x)} dx = \int_{\mathbb{R}^n} \check{f}(x) \overline{g(x)} dx = \int_{\mathbb{R}^n} \hat{f}(x) \hat{\overline{g}}(x) dx =$$
$$=\int_{\mathbb{R}^n} \hat{f}(x) \overline{\hat{g}(x)} dx = (\hat{f}, \hat{g})_2$$

Из следствия 1, в частности, получаем $\forall f \in S(\mathbb{R}^n)$
$$\|f\|_2 = \|\hat{f}\|_2 = \|\check{f}\|_2$$ – это равенство тоже наз. равенством Парсеваля.

Равенство Парсеваля для рядов: $f \in L_2[-\pi, \pi]: \frac{1}{2\pi} \|f\|^2 = \sum_{n \in \mathbb{Z}} |c_n|^2$
### Следствие 2 (формула обращения преобр. Фурье в $L_1(\mathbb{R}^n)$)
Пусть $f \in L_1(\mathbb{R}^n)$ и $\hat{f} \in L_1(\mathbb{R}^n)$. Тогда $\check{\hat{f}}(x) = f(x)$ почти всюду в $\mathbb{R}^n$.
### Док-во
Пусть $g(x) = \check{\hat{f}}(x)$ – сущ., непрер. и огр.
$$\forall \varphi \in C_0^\infty(\mathbb{R}^n), \int_{\mathbb{R}^n} g(x) \varphi(x) dx = \int_{\mathbb{R}^n} \check{\hat{f}} \varphi dx = \int_{\mathbb{R}^n} \hat{f} \check{\varphi} dx = \int_{\mathbb{R}^n} f \hat{\check{\varphi}} dx = \int_{\mathbb{R}^n} f \varphi dx$$
(р-во Парсеваля)
т.е. $\int_{\mathbb{R}^n} (g(x) - f(x)) \varphi(x) dx = 0 \Rightarrow f(x) = g(x)$ п.в.

Пусть $g(x) - f(x) > 0$ на мн-ве положит. меры, $\lambda(A) > 0$. Тогда по крит. изм-ми $\exists$ замкнутое мн-во $F \subset A$, $\lambda(F) > 0$.
Возьмем $\varphi \in C_0^\infty (\mathbb{R}^n)$: $supp \varphi \subset F$
$\varphi \ge 0$


---

## Page: page_58.png

# Заголовок лекции
## §

Тогда $0 < \int_F (f(x) - g(x))\varphi(x) dx = 0$

Следствие 3 (опред. преобр. Фурье в $L_2(\mathbb{R}^n)$)

Зафиксируем $f \in L_2(\mathbb{R}^n)$, т.к. $C_0^\infty (\mathbb{R}^n)$ плотно в $L_2(\mathbb{R}^n)$, то
$\exists \varphi_m \in C_0^\infty (\mathbb{R}^n): \|\varphi_m - f\|_2 \xrightarrow[m \to \infty]{} 0$

Покажем, что $\{\hat{\varphi}_m\}_{m \ge 1}$ - фундам-на в $L_2(\mathbb{R}^n)$
Т.к. $\varphi_m$ сходится, то она фундаментальна, т.е.
$\forall \varepsilon > 0 \exists N_0 \in \mathbb{N}: \forall q, p \ge N_0 \quad \|\varphi_p - \varphi_q\|_2 < \varepsilon$
$\underbrace{\|\varphi_p - \varphi_q\|}_{\|} \quad$ - р-во Парсеваля
$\|\hat{\varphi}_p - \hat{\varphi}_q\|_2$

Тогда $\exists f^* \in L_2(\mathbb{R}^n): \|\hat{\varphi}_m - f^*\|_2 \xrightarrow[m \to \infty]{} 0$

### Опр.
Преобразованием Фурье $f \in L_2(\mathbb{R}^n)$ наз. $f^*$, т.е.
$$F_+[f] = \lim_{m \to \infty}^{L_2} F_+[\varphi_m], \text{ где } \varphi_m \in C_0^\infty (\mathbb{R}^n) \text{ и } \varphi_m \xrightarrow[m \to \infty]{L_2} f.$$

### Теорема (Планшереля) (без док-ва)
Пусть $f \in L_2(\mathbb{R}^n)$, тогда $f_R(x) = \frac{1}{(2\pi)^{\frac{n}{2}}} \int\limits_{\underbrace{-R}_{-n}}^{R} \dots \int\limits_{-R}^R f(y) e^{-i(x, y)} dy \in L_2(\mathbb{R}^n)$
и $f_R \xrightarrow[R \to +\infty]{L_2} \hat{f}$

Для $\forall f \in L_2(\mathbb{R}^n)$ из опр. следует, что
$\|f\|_2 = \|\hat{f}\|_2 = \|\check{f}\|_2$
т.е. $F_+: L_2(\mathbb{R}^n) \to L_2(\mathbb{R}^n)$ - унитарный оператор.
т.е. $F_+^* = F_+^{-1} = F_-$

### Теорема (принцип неопред-ти Гейзенберга)
Пусть $f \in L_2(\mathbb{R})$, т.ч. $\|f\|_2 = \|\hat{f}\|_2 = 1$
Положим $x_0 = \int\limits_{\mathbb{R}} x|f(x)|^2 dx$, $p_0 = \int\limits_{\mathbb{R}} p|\hat{f}(p)|^2 dp$


---

## Page: page_59.png

$$
\sigma^2(f) = \int_\mathbb{R} (x-x_0)^2 |f(x)|^2 dx, \quad \sigma^2(\hat{f}) = \int_\mathbb{R} (p-p_0)^2 |\hat{f}(p)|^2 dp
$$
Тогда $\sigma(f) \cdot \sigma(\hat{f}) \ge \frac{1}{2}$.

### Доказательство:
1) $\varphi(x) = e^{-ip_0(x+x_0/2)} f(x+x_0)$

Будем считать, что $f \in S(\mathbb{R})$

$$
\Psi(p) = \hat{\varphi}(p) = \frac{1}{\sqrt{2\pi}} \int_\mathbb{R} \varphi(z) e^{-izp} dz = \frac{1}{\sqrt{2\pi}} \int_\mathbb{R} e^{-ip_0(z+\frac{x_0}{2})} f(z+x_0) e^{-izp} dz =
$$
$$
\begin{cases}
z + x_0 = t \\
dz = dt \\
z = t-x_0
\end{cases}
$$
$$
= \frac{1}{\sqrt{2\pi}} \int_\mathbb{R} e^{-ip_0(t-x_0+\frac{x_0}{2})} e^{-i(t-x_0)p} f(t) dt \overset{\oplus}{=} \frac{1}{\sqrt{2\pi}} \int_\mathbb{R} e^{-ip_0t} e^{ip_0x_0} e^{-i\frac{p_0x_0}{2}} e^{-itp} e^{ix_0p} f(t) dt =
$$
$$
\overset{\oplus}{=} \frac{1}{\sqrt{2\pi}} e^{ix_0(p+\frac{p_0}{2})} \int_\mathbb{R} f(t) e^{-it(p+p_0)} dt = e^{ix_0(p+\frac{p_0}{2})} \hat{f}(p+p_0) = \Psi(p)
$$
2) Проверим, что $||\varphi||_2 = ||\psi||_2 = 1$
$$
\int_\mathbb{R} x |\varphi(x)|^2 dx = 0 = \int_\mathbb{R} p |\psi(p)|^2 dp
$$
$$
\sigma^2(\varphi) = \int_\mathbb{R} x^2 |\varphi(x)|^2 dx = \sigma^2(f)
$$
$$
\sigma^2(\psi) = \int_\mathbb{R} p^2 |\psi(p)|^2 dp = \sigma^2(\hat{f})
$$

$$
\textcircled{1} \quad ||\varphi||_2^2 = \int_\mathbb{R} |\varphi(x)|^2 dx = \int_\mathbb{R} |e^{-ip_0(x+\frac{x_0}{2})} f(x+x_0)|^2 dx = \int_\mathbb{R} |f(x+x_0)|^2 dx = \int_\mathbb{R} |f(x)|^2 dx = 1
$$
$$
||\hat{\varphi}||_2^2 = ||\psi||_2^2
$$

$$
\textcircled{2} \quad \int_\mathbb{R} x |\varphi(x)|^2 dx = \int_\mathbb{R} x |f(x+x_0)|^2 dx \begin{cases} x + x_0 = t \\ x = t - x_0 \end{cases} = \int_\mathbb{R} (t-x_0) |f(t)|^2 dt =
$$
$$
= \underbrace{\int_\mathbb{R} t |f(t)|^2 dt}_{x_0} - x_0 \underbrace{\int_\mathbb{R} |f(t)|^2 dt}_{1} = 0.
$$

---

## Page: page_6.png

# Лекция без названия (дата отсутствует)
## Параграф (§) 5
### Опр.
$\Gamma(x)$ - строго выпуклая ф-ия, имеющая глоб. минимум на инт. $(1, 2)$.
$$\Gamma''(x) = \int_0^\infty (\ln t)^2 t^{x-1} e^{-t} dt > 0 \Rightarrow \Gamma \text{-стр. вып.}$$

$$0! = \Gamma(1) = \Gamma(2) = 1! = 1$$
По т. Ролля $\exists \xi \in (1, 2): \Gamma'(\xi) = 0$, $\xi$ - пок. мин., т.к. $\Gamma$ - строго выпукла, то $\xi$ - глоб. минимум.
$$\xi \approx 1,46 \quad \Gamma(\xi) \approx 0,88.$$
## Параграф (§) 6
### Опр.
$B(x, y) = \frac{\Gamma(x) \Gamma(y)}{\Gamma(x+y)}, \quad x, y > 0$.
м. Тионкели
### Доказательство
$$\Gamma(x) \Gamma(y) = \int_0^\infty t^{x-1} e^{-t} dt \cdot \int_0^\infty s^{y-1} e^{-s} ds = \iint_0^\infty t^{x-1} s^{y-1} e^{-(s+t)} ds dt \ominus$$
$$\begin{cases} s+t = u \\ t = u\nu \end{cases} \quad \frac{\partial(s, t)}{\partial(u, \nu)} = det \begin{pmatrix} s_u & s_\nu \\ t_u & t_\nu \end{pmatrix} = det \begin{pmatrix} 1-\nu & -u \\ \nu & u \end{pmatrix} = u - u\nu + u\nu = u$$
$$\Downarrow$$
$$s = u - u\nu$$
- $s + t = const$
  $\Downarrow$
  $u = const$
- $t = ds, \quad d = const, \quad d \in [0; +\infty]$
- $\frac{s+t}{t} = \frac{u}{u\nu} = \frac{1}{\nu}$
- $\frac{s+ds}{ds} = \frac{1}{\nu} \Rightarrow \nu = \frac{d}{1+d} = const \in [0; 1]$

### Замечание
$$\ominus \iint_0^\infty e^{-u} (u\nu)^{x-1} (u(1-\nu))^{y-1} u \, d\nu du = \int_0^\infty u^{x+y-1} e^{-u} du \cdot \int_0^1 \nu^{x-1} (1-\nu)^{y-1} d\nu =$$
$$= \Gamma(x+y) \cdot B(x, y)$$
### Следствие
1) $B(x, y) = B(y, x)$
2) $B \in C^\infty(\mathbb{R}^2_{>0})$
## Параграф (§) 7
### Опр.
Формула Гаусса-Эйлера
$$\Gamma(x) = \lim_{n \to \infty} \frac{n^x n!}{x(x+1) \dots (x+n)}$$
### Доказательство
$$\Gamma(x) = \int_0^\infty t^{x-1} e^{-t} dt = \begin{cases} t = \ln \frac{1}{s} \\ e^{-t} = s \\ ds = e^{-t} dt \\ t = 0 \quad \to \quad s = 1 \\ t = +\infty \quad \to \quad s = 0 \end{cases} = \int_0^1 \left( \ln \left( \frac{1}{s} \right) \right)^{x-1} ds$$
$$\lim_{n \to \infty} n \left( 1 - s^{\frac{1}{n}} \right) = \ln \left( \frac{1}{s} \right)$$
[НРЗБ: выражение] - ек-ть будет монотонной
$$\lim_{d \to 0+} \frac{1 - s^d}{d} = \lim_{d \to 0+} \frac{-s^d \ln s}{1} = -\ln s = - \ln \left( \frac{1}{s} \right)$$
$$\left( \frac{1 - s^d}{d} \right)' = \frac{(-s^d \ln s)d - (1-s^d)}{d^2} = \frac{s^d \ln \left( \frac{1}{s} \right) d + s^d - 1}{d^2} > 0$$

---

## Page: page_60.png

# Заголовок лекции
$$ \sigma^2(\varphi) = \int_{\mathbb{R}} (x-o)^2 |\varphi|^2 dx = \int_{\mathbb{R}} x^2 |f(x+x_0)|^2 dx = \int_{\mathbb{R}} (t-x_0)^2 |f(t)|^2 dt := \sigma^2(f). $$
3) Рассмотрим интеграл
$$ \int_{\mathbb{R}} |xt \varphi(x) + \varphi'(x)|^2 dx \ge 0 \quad \forall t \in \mathbb{R} $$
$$ \int_{\mathbb{R}} |xt \varphi(x) + \varphi'(x)|^2 dx = \int_{\mathbb{R}} (xt \varphi(x) + \varphi'(x)) \cdot (x t \overline{\varphi(x)} + \overline{\varphi'(x)}) dx = $$
$$ = t^2 \int_{\mathbb{R}} x^2 |\varphi(x)|^2 dx + t \int_{\mathbb{R}} x(\varphi \overline{\varphi'} + \overline{\varphi} \varphi') dx + \int_{\mathbb{R}} |\varphi'|^2 dx = $$
$$ = t^2 \sigma^2(\varphi) + t \int_{\mathbb{R}} x (\varphi \overline{\varphi})' dx + \int_{\mathbb{R}} |\varphi'|^2 dx $$
Среднеквадратичное
$$ \int_{\mathbb{R}} x (|\varphi|^2)' dx = \int_{\mathbb{R}} x d|\varphi|^2 = x|\varphi(x)|^2 \Big|_{-\infty}^{+\infty} - \int_{\mathbb{R}} |\varphi(x)|^2 dx = -1 $$
$$ \text{т.к.} \quad f \in S(\mathbb{R}) \Rightarrow \varphi \in S(\mathbb{R}) \Rightarrow |\varphi|^2 \in S(\mathbb{R}) $$
$$ F_+[\varphi'](p) = ip F_+[\varphi](p) = ip \psi(p) $$
Тогда
$$ \int_{\mathbb{R}} |\varphi'|^2 dx = \int_{\mathbb{R}} |F_+[\varphi']|^2 dp = \int_{\mathbb{R}} p^2 |\psi_{(p)}|^2 dp = \sigma^2(\psi) $$
Р-во Парсеваля

Таким образом
$$ \forall t \in \mathbb{R} \quad t^2 \sigma^2(f) - t + \sigma^2(\hat{f}) \ge 0 $$
$$ \Rightarrow D = 1 - 4 \sigma^2(\hat{f}) \sigma^2(f) \le 0 \Rightarrow \sigma^2(f) \sigma^2(\hat{f}) \ge \frac{1}{4} $$
Преобразование Фурье мер и распределений (обобщ. функций)
1. Пусть $\mu$-борелевская мера в $\mathbb{R}^n$
Тогда преобр. Фурье меры $\mu$ наз.
$$ F[\mu](x) = \int_{\mathbb{R}^n} e^{i(x, y)} d \mu(y). $$
в т. вероятностей его наз. характеристическим функционалом
2. Преобр. Фурье для регулярных распределений

---

## Page: page_61.png

# 25/03/24 Интегрирование на гладких многообразиях

$f \in L_{p,loc}(\mathbb{R}^n)$
*лок-но интегрир. в $p$-ой степ.*
$F_f: S(\mathbb{R}^n) \to \mathbb{C}$
$F_f (\varphi) = \int_{\mathbb{R}^n} f(x) \varphi(x) dx := <f|\varphi>$
*с огр.*

$F[F_f]: S(\mathbb{R}^n) \to \mathbb{C}$
$<F[f]|\varphi> := <f|\widehat{F}[\varphi]>$
$F_f$ *отожд. с* $f$

## §1 Мера Хаусдорфа
### 1) Измеримость по Каратеодори
#### Опр.
Отображение $\mu: 2^{\mathbb{R}^n} \to [0; +\infty]$ наз. *внешней мерой*, если
- 1) $\mu(\varnothing) = 0$
- 2) $\forall A_n, n \ge 1 \quad \mu(\bigcup_{n=1}^\infty A_n) \le \sum_{n=1}^\infty \mu(A_n)$
    (*$\sigma$-полуаддитивность*)

#### Опр.
Множество $A \subset \mathbb{R}^n$ наз. *измеримым относ. внешней меры* $\mu$ (*по Каратеодори*), если
$$\forall B \subset \mathbb{R}^n \quad \mu(B) = \mu(B \cap A) + \mu(B \setminus A)$$
*Обознач.* $m_\mathcal{X} = \{A - \text{изм. по Каратеодори}\}$.

#### Замечание 1.
$\mu|_{m_\mathcal{X}}$ - *мера*.
#### D-во:
Пусть $A, B \subset \mathbb{R}^n, A \cap B = \varnothing$ и $A, B \in m_\mathcal{X}$. Тогда
$$\mu(A \cup B) = \mu((A \cup B) \setminus B) + \mu((A \cup B) \cap B)$$
$$\underbrace{=}_{\mu(A)} \qquad \underbrace{=}_{\mu(B)}$$
$\Rightarrow \mu$ - *мера*.

---

## Page: page_62.png

#  
## 

Замечание 2.
Можно показать, что $\mathfrak{M}_\mu$ - $\sigma$-алгебра и $\mu|_{\mathfrak{M}_\mu}$ - $\sigma$-аддит. мера.

### Теорема (Каратеодори о достат. усл. борелевкости внешней меры)
Пусть $\mu$ - внеш. мера в $\mathbb{R}^n$, т. что $\forall A, B \subseteq \mathbb{R}^n$:
$$dist(A, B) > 0 \Rightarrow \mu(A \cup B) = \mu(A) + \mu(B).$$
(расстояние $dist(A, B) = \inf_{\substack{x \in A \\ y \in B}} ||x - y||_2$).

Тогда $\mathfrak{B}(\mathbb{R}^n) \subset \mathfrak{M}_\mu$

*Доказ-во:* достаточно показать, что всякое замкнутое множество $F \subseteq \mathbb{R}^n$ лежит в $\mathfrak{M}_\mu$, т.е.
$\forall B \subseteq \mathbb{R}^n$: $\mu(B) = \mu(B \cap F) + \mu(B \cap F^c)$
уже есть: $B \subseteq B \cap F \cup B \cap F^c \Rightarrow \mu(B) \le \mu(B \cap F) + \mu(B \cap F^c)$ - полуадд.

$F_m$ - замкнутое $\frac{1}{m}$ расширение мн-ва $F$, т.е. $F_m = \{ x \in \mathbb{R}^n: dist(x, F) \le \frac{1}{m} \}$

$dist(B \cap F, B \setminus F_m) \ge \frac{1}{m} > 0$ по усл. тк
$\Rightarrow \mu((B \cap F) \cup (B \setminus F_m)) = \mu(B \cap F) + \mu(B \setminus F_m)$
$\subseteq B$
по полуаддитивности
$\mu(B \cap F) + \mu(B \setminus F_m) \le \mu(B)$.

Покажем, что $\lim_{m \to \infty} \mu(B \setminus F_m) \to \mu(B \setminus F)$.
$B \setminus F = B \setminus F_m \cup \bigcup_{k=m}^\infty \underbrace{\{x \in B: \frac{1}{k+1} < dist(x, F) \le \frac{1}{k}\}}_{R_k}$.

Если $x \in B \setminus F$, то $x \in B$ & $dist(x, F) > 0$
$\mu(B \setminus F_m) \le \mu(B \setminus F) \le \mu(B \setminus F_m) + \sum_{k=m}^\infty \mu(R_k)$
Нужно показать, что $\lim_{m \to \infty} \sum_{k=m}^\infty \mu(R_k) = 0 \Leftrightarrow$ ряд $\sum_{k=1}^\infty \mu(R_k)$ сходится.

---

## Page: page_63.png

# Заголовок лекции
## §
### Лемма
$$\sum_{k=m}^\infty \mu(R_k) = \sum_{k=[\frac{m}{2}]}^\infty \mu(R_{2k}) + \sum_{k=[\frac{m}{2}]}^\infty \mu(R_{2k+1})$$
$$\Downarrow$$
$$\mu(B)$$
$$\Downarrow$$
$$\mu(B)$$
Ясно, что $\bigcup\limits_{k=[\frac{m}{2}]}^\infty R_{2k} \subseteq B$

$\bigcup\limits_{k=[\frac{m}{2}]}^\infty R_{2k+1} \subseteq B$

Считаем, что $\mu(B) < \infty$.

*(Для беск. равенство уже есть, см. выше)*

$$dist(R_{2k}, R_{2p}) > 0 \Rightarrow \mu(\bigcup_{k=[\frac{m}{2}]}^\infty R_{2k}) = \sum_{k=[\frac{m}{2}]}^\infty \mu(R_{2k}) \le \mu(B)$$
$$(p \neq k)$$
$$\uparrow$$
*упр.*

$\Box$

2) Мера Хаусдорфа

### Опр.
Пусть $d \ge 0$, $\delta > 0$, $A \subseteq \mathbb{R}^n$.

*диаметр - наибольшее расстояние между точками данного множества*

$$\mathcal{H}_\delta^d(A) = \inf \left\{ \sum_{i=1}^\infty (diam F_i)^d: \bigcup_{i=1}^\infty F_i \supseteq A, F_i - \text{замкн.}, diam F_i < \delta \right\}, A \subseteq \mathbb{R}^n$$

*(описываем, далее предполагается также)*
Если $\delta_1 < \delta_2 \Rightarrow \mathcal{H}_{\delta_1}^d \ge \mathcal{H}_{\delta_2}^d$

Тогда мерой Хаусдорфа наз. $\lim_{\delta \to 0+} \mathcal{H}_\delta^d(A) := \mathcal{H}^d(A)$
$$\Downarrow$$
$$\sup_{\delta > 0} \mathcal{H}_\delta^d(A)$$

### Проверим:
Пусть $\delta_1 < \delta_2$

Если $diam F_i < \delta_1 < \delta_2$
$$\bigcup_{i=1}^\infty F_i \supseteq A$$
$$\mathcal{H}_{\delta_2}^d(A) \le \sum_{i=1}^\infty (diam F_i)^d$$
$$\mathcal{H}_{\delta_2}^d(A) = \inf_{\bigcup\limits_{i=1}^\infty F_i \supseteq A, diam F_i < \delta_2} \sum_{i=1}^\infty (diam F_i)^d$$

$$\Rightarrow \mathcal{H}_{\delta_2}^d(A) \le \mathcal{H}_{\delta_1}^d(A)$$

### Примеры:
1) $d = 0: \mathcal{H}^0$ в $\mathbb{R}^n$ - это считающая мера, т.е. $\mathcal{H}^0(A) = \#A$
*(кол-во эл-ов в мн-ве)*


---

## Page: page_64.png

# Заголовок лекции

$$H^0(A) = \lim_{\delta \to 0} \inf \left\{ \sum_{n=1}^\infty 1 : \bigcup_{n=1}^\infty F_n \supset A, \text{diam } F_n < \delta \right\}$$
- Если $A = \{a_0\}$, то $H^0(\{a_0\}) = 1$
- $A = \{a_0, a_1\}$, то $H(\{a_0, a_1\}) = 2$ и так далее
Если $\#(A) \le |\mathbb{N}|$, то $H^0(A) = \#(A)$.
Пусть $\mathbb{R}^1$
$$H^0([0, 1]) = \infty \quad (\tilde \infty) \text{ ?}$$
$[0, 1] \in \mathfrak{M}_H$ ? $H^0(B) = H^0(B \cap [0, 1]) + H^0(B \setminus [0, 1])$
$$\forall B \subset \mathbb{R}^n$$

$\alpha = 1 \quad B \subset \mathbb{R}^1$
$$H^1([a, b]) = \lim_{\delta \to 0+} \inf \left\{ \sum_{i=1}^N (\text{diam } F_i)^1 : \bigcup_{i=1}^N F_i \supset A: \text{diam } F_i < \delta, N \in \mathbb{N} \cup \{\infty\} \right\}.$$
Если $F_i = [\alpha_i, \beta_i]$, то $\text{diam } F_i = \lambda_1([\alpha_i, \beta_i])$ (Лебеговская мера (длина)).

=> $H^1([a, b]) = \lambda_1([a, b])$ - Борелевская $\theta$-алгебра
т.к. $[a, b]$ генерируют $\mathfrak{B}(\mathbb{R}^1)$ => $H^1|_{\mathfrak{B}(\mathbb{R}^1)} = \lambda_1|_{\mathfrak{B}(\mathbb{R}^1)}$

### Теорема (о борелевости меры Хаусдорфа)
Для любого $d \ge 0$ мера Хаусдорфа $H^d$ в $\mathbb{R}^n$ является внешней мерой и $\mathfrak{M}_H \supset \mathfrak{B}(\mathbb{R}^n)$.

Док-во:
1) $H^d(\emptyset) = \lim_{\delta \to 0+} H^d_\delta (\emptyset) = 0$, т.к. $\forall \delta > 0 \quad H^d_\delta (\emptyset) \le (\text{diam } \{a\})^\alpha = 0$
$$\emptyset \subset \{a\}, \text{ diam }\{a\} = 0 < \delta.$$
2) Пусть $A_i \subset \mathbb{R}^n$

---

## Page: page_65.png

# Лекция (НРЗБ)
$$Torga\ H^\alpha\left(\bigcup_{i=1}^\infty A_i\right) = \sup_{\delta > 0} H_\delta^\alpha\left(\bigcup_{i=1}^\infty A_i\right)$$
$$H_\delta^\alpha\left(\bigcup_{i=1}^\infty A_i\right) \le \sum_{i=1}^\infty \sum_{n=1}^\infty (\text{diam}\ F_{ni})^\alpha = \sum_{i=1}^\infty \left( \sum_{n=1}^\infty (\text{diam}\ F_{ni})^\alpha \right) = \sum_{i=1}^\infty H_\delta^\alpha(A_i) + \varepsilon$$
$$ \underbrace{\sum_{i=1}^\infty \sum_{n=1}^\infty (\text{diam}\ F_{ni})^\alpha}_{\le H_\delta^\alpha(A_i) + \frac{\varepsilon}{2^i}} $$
- $A_i \subset \bigcup_{n=1}^\infty F_{ni},\ \text{diam}\ F_{ni} < \delta$
- $\bigcup_{i=1}^\infty A_i \subset \bigcup_{i=1}^\infty \bigcup_{n=1}^\infty F_{ni}$
$$\forall \varepsilon > 0 \quad H_\delta^\alpha\left(\bigcup_{i=1}^\infty A_i\right) \le \sum_{i=1}^\infty H_\delta^\alpha(A_i) + \varepsilon$$
$$\Rightarrow H^\alpha\left(\bigcup_{i=1}^\infty A_i\right) \le \sum_{i=1}^\infty H_\delta^\alpha(A_i) \le \sum_{i=1}^\infty H^\alpha(A_i)$$
$$\Rightarrow H^\alpha\left(\bigcup_{i=1}^\infty A_i\right) \le \sum_{i=1}^\infty H^\alpha(A_i)$$
3) По т. Каратеодори, возьмем $A, B \subset \mathbb{R}^n: \text{dist}(A, B) > 0$.
возьмем $0 < \delta < \frac{\gamma}{4}$
"такого не может быть"
$$H_\delta^\alpha(A \cup B) = \inf\left\{ \sum_{i=1}^\infty (\text{diam}\ F_i)^\alpha : \bigcup_{i=1}^\infty F_i \supset A \cup B, \text{diam}\ F_i < \delta \right\} = $$
$$ = \inf\left\{ \sum_{i} (\text{diam}\ F_i)^\alpha + \sum_{j} (\text{diam}\ F_j)^\alpha \right\} = H_\delta^\alpha(A) + H_\delta^\alpha(B)$$
$$\bigcup F_i \supset A$$
$$ \text{diam}\ F_i < \delta$$
$$\bigcup F_j \supset B$$
$$ \text{diam}\ F_j < \delta$$
$$\Rightarrow H^\alpha(A \cup B) = H^\alpha(A) + H^\alpha(B)$$

### Теорема (о простейших свойствах меры Хаусдорфа)
1) $H^n$ в $\mathbb{R}^n$ эквивалентна мере Лебега $\lambda_n$; более того, $\forall A \in \mathcal{B}(\mathbb{R}^n)$
$$H^n(A) = \gamma_n \lambda_n(A),\ \gamma_n = 2^n \frac{\Gamma(\frac{n}{2} + 1)}{\pi^{\frac{n}{2}}}$$

*списать еще раз*

2) $H_n^d = 0, \quad \forall d > n$

3) Если $H_n^\alpha(A) < \infty$, то $H_n^\beta(A) = 0 \quad \forall \beta > \alpha$
Если $H_n^\alpha(A) > 0$, то $H_n^\beta(A) = +\infty \quad \forall \beta < \alpha$


---

## Page: page_66.png

# 04104124
##
### Доказательство
Пусть $H_n(A) = 0$, тогда $\forall \varepsilon > 0$ $H_n^\delta (A) = 0$, т.е.
$\forall \varepsilon > 0$ $\exists$ покрытие $\bigcup_{i=1}^\infty F_i \supset A$: $\sum_{i=1}^n (diam F_i)^n < \varepsilon$
$diam F_i < \delta$

Рассмотрим $x_i \in F_i$ $B(x_i, r_i)$, $r_i = diam F_i$
$$F_i \subset B(x_i, r_i)$$

$$A \subset \bigcup_{i=1}^\infty F_i \subset \bigcup_{i=1}^\infty B(x_i, r_i) \Rightarrow \lambda_n(A) \le \sum_{i=1}^\infty \lambda_n(B(x_i, r_i)) = \sum_{i=1}^\infty \omega_n \cdot r_i^n = \omega_n \sum_{i=1}^\infty (diam F_i)^n < \omega_n \cdot \varepsilon$$
$$мера \; 1^го \; шара$$ $$< \varepsilon$$
$\Rightarrow \lambda_n(A) = 0$.

Пусть теперь $\lambda_n(A) = 0$, т.е. $\forall \varepsilon > 0$ $\exists$ покрытие кубиками $F_i$: $\sum_{i=1}^\infty \lambda_n(F_i) < \varepsilon$
можно считать, что $diam F_i < \delta$.
$$H_n^\delta (A) \le \sum_{i=1}^\infty (diam F_i)^n =$$
$$= \sum_{i=1}^\infty (a_i \sqrt{n})^n = n^{\frac{n}{2}} \sum_{i=1}^\infty a_i^n < n^{\frac{n}{2}} \varepsilon$$
$$H_n^\delta (A) = 0 \Rightarrow H_n(A) = 0$$
ч.т.д.
$\varepsilon > 0$ произв.

Чтобы найти константу: Эванс, Гариени "Теория меры и тонкие св-ва ф-ий".

### 3.1)
Пусть $H_n^\alpha (A) < \infty$ и $p > \alpha$
Тогда $H_n^p(\delta)(A) = inf \{ \sum_{i=1}^\infty (diam F_i)^p : diam F_i < \delta, \bigcup_{i=1}^\infty F_i \supset A \} =$
$= inf \{ \sum_{i=1}^\infty (diam F_i)^\alpha \cdot (diam F_i)^{p - \alpha}: - " - \} \le$
$\le \delta^{p - \alpha} inf \{ \sum_{i=1}^\infty (diam F_i)^\alpha: - " - \} = \delta^{p - \alpha} H_n^\alpha (\delta)(A)$

при $\delta \to 0+$
$$H_n^p(\delta)(A) \le \delta^{p - \alpha} H_n^\alpha (\delta)(A)$$
$$\downarrow \delta \to 0+ \quad \downarrow \delta \to 0+$$
$$H_n^p(A) \qquad 0 \cdot H_n^\alpha (A) = 0$$
$$\Rightarrow H_n^p(A) = 0$$

### 3.2)
Пусть теперь $H_n^\alpha (A) > 0$ и предположении, что $\exists p > \alpha: H_n^p(A) < +\infty \Rightarrow$

---

## Page: page_67.png

#  
$$
\begin{aligned}
&из. доказ.\\
&\Rightarrow H_n^\alpha (A) = 0 \text{ протидоречие.}
\end{aligned}
$$
2) Пусть $A \subset \mathbb{R}^n$ - [НРЗБ], тогда $H_n^\alpha (A) = \gamma_n \lambda_n (A) < \infty \Rightarrow H_k^\alpha (A) = 0 \quad \forall \alpha > n$
$\Rightarrow H_n^\alpha (\mathbb{R}^n) = 0$ т.к. $\mathbb{R}^n = \bigsqcup_{d \in \mathbb{Z}^n} I_\alpha$ - *замкнут.*

## §
### Опр.
Размерностью по Хаусдорфу ми-ва $A \subset \mathbb{R}^n$ наз.
$d_0 = \inf \{\alpha > 0: H_n^\alpha (A) = 0 \}.$

```
      +∞      0
  0  (α) n   α
```
*написал сп. мера* $\mathcal{H}$. Закупится $\Rightarrow d_0 \le n$

может быть
любое из значений: $\mathcal{H}_n^{d_0}(A) \in [0; +\infty).$

### Пример:
Разм-ть плоскости в $\mathbb{R}^3$
```
      |
  E   |  N²(δ)
```
Покажем, что
$$
\begin{aligned}
&H_3^\alpha (E) = 0 \quad \forall \alpha > 2 \\
&H_3^\alpha (E) = +\infty \quad \forall 0 \le \alpha < 2
\end{aligned}
$$
$$H_3^\alpha (\delta)(E) \le \sum_{i=1}^{N^2(\delta)} (diam \ F_i)^\alpha \le \delta^\alpha \frac{2a^2}{\delta^2} = 2a^2 \delta^{\alpha - 2} \underset{\delta \to 0}{\longrightarrow} 0$$
Как связаны $N$ и $\delta$
$$a = N(\delta) \cdot \frac{\delta}{\sqrt{2}} \qquad N(\delta) = \frac{\sqrt{2}}{\delta} a \quad \Rightarrow H_3^\alpha (E) = 0$$

### Упр.:
найти размерность множества Кантора в $\mathbb{R}^1$

### Теорема (об образе меры Хаусдорфа под действием отображений)
1) $H_n^\alpha (\lambda A) = \lambda^\alpha H_n^\alpha (A), \quad \lambda > 0$
2) $H_n^\alpha (A+b) = H_n^\alpha (A), \quad b \in \mathbb{R}^n$, *это всегда инъекция*
3) Пусть $T: \mathbb{R}^k \to \mathbb{R}^n$, $k \le n$ - *изометрия*, тогда
$$H_n^\alpha (TA) = H_k^\alpha (A), \quad A \subset \mathbb{R}^k.$$
4) Пусть $T: \mathbb{R}^k \to \mathbb{R}^n, \quad k \le n$ и $rank \ T = k$.
Тогда $H_n^k (TA) = \sqrt{det \ TT^*} H_k^k (A), \quad A \subset \mathbb{R}^k$, где
$$(Tx, y)_{\mathbb{R}^n} = (x, T^*y)_{\mathbb{R}^k}, \text{ m.e. } T^*: \mathbb{R}^n \to \mathbb{R}^k, \quad x \in \mathbb{R}^k, y \in \mathbb{R}^n$$

---

## Page: page_68.png

# Доказательство
1) Пусть $\delta > 0$: $H_n^\alpha (\delta) (\lambda A) = \inf \left\{ \sum_{i=1}^\infty (\operatorname{diam} F_i)^\alpha : \bigcup_{i=1}^\infty F_i \supset \lambda A, \operatorname{diam} F_i < \delta \right\} \Theta$
$\lambda A = \{y \in \mathbb{R}^n : y = \lambda x, x \in A \}$
Ясно, что $\bigcup_{i=1}^\infty F_i \supset A \Leftrightarrow \bigcup_{i=1}^\infty \lambda F_i \supset \lambda A$
$\Theta \inf \left\{ \sum_{i=1}^\infty (\operatorname{diam} \lambda F_i)^\alpha : \bigcup_{i=1}^\infty F_i \supset A, \operatorname{diam} F_i < \frac{\delta}{\lambda} \right\} = $
$= \lambda^\alpha H_n^\alpha (\frac{\delta}{\lambda}) (A)$ при $\delta \to 0^+$
$H_n^\alpha (\lambda A) = \lambda^\alpha H_n^\alpha (A)$

2) $H_n^\alpha (\delta) (A+ b) = \inf \left\{ \sum_{i=1}^\infty (\operatorname{diam} (F_i+b))^\alpha : \bigcup_{i=1}^\infty F_i \supset A, \operatorname{diam} F_i < \delta \right\} =$
$= H_n^\alpha (\delta A)$.

3) $H_n^\alpha (\delta) (TA) = \inf \left\{ \sum_{i=1}^\infty (\operatorname{diam} TF_i)^\alpha : \bigcup_{i=1}^\infty F_i \supset A, \operatorname{diam} (TF_i) < \delta \right\}$
$A \subseteq \mathbb{R}^k$
если $\bigcup F_i \supset A \Leftrightarrow \bigcup TF_i \supset TA$ (за счет инъективности)

Т.к. $T$ - изометрия, то $\operatorname{diam} F_i = \operatorname{diam} TF_i$
$$ \inf \left\{ \sum_{i=1}^\infty (\operatorname{diam} F_i)^\alpha : \bigcup F_i \supset A, \operatorname{diam} F_i < \delta \right\} = H_n^\alpha (\delta) (A), \text{ при } \delta \to 0^+$$
$H_n^\alpha (TA) = H_n^\alpha (A)$

4) Пусть $T \in \mathcal{L} (\mathbb{R}^k, \mathbb{R}^n)$, $\operatorname{rank} T = k$.
Тогда $T = R \cdot S$, где $R : \mathbb{R}^k \to \mathbb{R}^n$ - изометрия (ортог. отображение при $n = k$)
$S = \sqrt{T^* T} : \mathbb{R}^k \to \mathbb{R}^k$
$H_n^k (TA) = H_n^k (RSA) = H_n^k (SA) = \gamma_k \lambda_k (SA) = \gamma_k \det S \lambda_k (A) =$
$= \det S H_k^k (A)$
$\det \sqrt{T^* T}$
$\det \sqrt{T^* T}$

# Теорема (о мере Хаусдорфа на гладком многообразии)
Пусть $M \subseteq \mathbb{R}^n$ - гладкое $k$-мерное многообразие, $A \subseteq M$ - борелевское мн-во.
Пусть $\eta : U \to \mathbb{R}^n$ локальная параметризация многообразия $M$,


---

## Page: page_69.png

# Заголовок лекции
такая, что $r(U) \supset A$.
Тогда $H^k(A) = \gamma_k \int_{r^{-1}(A)} \sqrt{\det(r'(x)^* r'(x))} d\lambda_k(x)$

## §
$$
\begin{array}{c}
r(U) \\
\bigcap \\
A
\end{array}
\qquad M \subset \mathbb{R}^n \qquad
\begin{array}{c}
\text{Доказательство:} \\
\text{(общие рассуждения)} \\
\text{rank } r'(x) = k \quad \forall x \in U
\end{array}
$$
$$
r'(x) \in \mathcal{L}(\mathbb{R}^k, \mathbb{R}^n) \\
\text{лин. отобр.}
$$
Локально $r(x) \sim r'(x)$
$$r^{-1}(A) = \bigcup_i r^{-1}(A_i) \Rightarrow H^k(A_i) = H^k(r(r^{-1}(A_i))) =$$
$$ = H^k(r'(r'^{-1}(A_i))) = \sqrt{\det((r'(x)^*r'(x))} H^k(r'^{-1}(A_i)) = \gamma_k \int_{r^{-1}(A_i)} \sqrt{\det((r'(x)^*r'(x))} d\lambda_k(x)$$
$$
\text{2(x) - коэффициент} \\
\text{искажения}
$$
$$\Rightarrow H^k(A) = \sum_i H^k(A_i) = \gamma_k \int_{r^{-1}(A)} \sqrt{\det((r'(x)^*r'(x))} d\lambda_k(x) = \int_{r^{-1}(A)} \mathcal{X}(x) dH^k(x).$$

Обозн.:
$$
\begin{array}{ll}
k=1 & dH_1 = dl = ds \text{ - элемент длины} \\
k=2 & dH_2 = dS \text{ - элемент площади}
\end{array}
$$

### Пример: k=1 в $\mathbb{R}^n$:
$\gamma$
$$r(t) = (x_1(t), \dots, x_n(t)), \quad t \in (a, b)$$
$$r'(t) = \begin{pmatrix} \dot x_1 \\ \dots \\ \dot x_n \end{pmatrix}, \quad (r'(t))^* = (\dot x_1 \dots \dot x_n)$$
$$\mathcal{X}(t) = \sqrt{\det r'(t)^*r'(t)} = \sqrt{\det((\dot x_1)^2 + \dots + (\dot x_n)^2)} = \sqrt{(\dot x_1)^2 + \dots + (\dot x_n)^2}$$
$$dl = \sqrt{\dot x_1^2 + \dots \dot x_n^2} dt$$
03/04/24

### Опр.
Пусть $M$ - гладкое $k$-мерное многообразие в $\mathbb{R}^n$.
Поверхностной мерой $\sigma_k$ на $M$ будем наз. нормиз[НРЗБ: -ую] меру Хаусдорфа $H^k$, т.е. $d\sigma_k = \gamma_k^{-1} dH^k$.

в частности:
$$
\begin{array}{c}
d\sigma_1 = dl = ds \\
d\sigma_2 = dS
\end{array}
$$

---

## Page: page_7.png

# Заголовок лекции (Б. Певи)

$$\Gamma(x) = \int_0^1 (\ln(\frac{1}{s}))^{x-1} ds = \int_0^1 \lim_{n \to \infty} (n(1-s^{\frac{1}{n}}))^{x-1} ds = \lim_{n \to \infty} n^{x-1} \int_0^1 (1-s^{\frac{1}{n}})^{x-1} ds$$
По т. Б. Певи

## § Замена
$$\begin{cases} s^{\frac{1}{n}} = u \\ s = u^n \\ ds = nu^{n-1} du \\ s = 0 \to u=0 \\ s = 1 \to u=1 \end{cases}$$
$$= \lim_{n \to \infty} n^{x-1} \int_0^1 (1-u)^{x-1} nu^{n-1} du = \lim_{n \to \infty} n^x \int_0^1 (1-u)^{x-1} u^{n-1} du =$$
$$= \lim_{n \to \infty} n^x B(x, n) = \lim_{n \to \infty} n^x \frac{\Gamma(x) \Gamma(n)}{\Gamma(x+n)} \stackrel{\ominus}{=}$$
$$\Gamma(x+n) = (x+n-1)\Gamma(x+n-1) = ... (x+n-1) ... \Gamma(x)$$
$$\stackrel{\ominus}{=} \lim_{n \to \infty} n^x \frac{(n-1)!}{x(x+1)...(x+n-1)} = \lim_{n \to \infty} \frac{(n+1)^x n!}{x(x+1)...(x+n)} = \lim_{n \to \infty} \frac{n^x n!}{x(x+1)...(x+n)}$$
$$(\frac{n+1}{n})^x \to 1$$
$$\Gamma_n(x) \text{ (обозн.)}$$

### Следствие:
$$\Gamma_n(x) \cdot x(x+1)...(x+n) = n^x \cdot n!$$
$$\Gamma_n(x) x (1+\frac{x}{1})(1+\frac{x}{2})...(1+\frac{x}{n}) = n^x = e^{x \ln n}$$

$$* 1+\frac{1}{2} + \frac{1}{3} + ... + \frac{1}{n} - \ln n \underset{n \to \infty}{\longrightarrow} \gamma \approx 0,5... \text{ - константа Эйлера-Маскерона}$$
$$\Gamma_n(x) \cdot x (1+\frac{x}{1})...(1+\frac{x}{n}) e^{-x (1+\frac{1}{2}+...+\frac{1}{n})} = e^{-x(1+\frac{1}{2}+...+\frac{1}{n}-\ln n)}$$
$$= e^{-x \gamma}$$
$$ \text{при } n \to \infty: \quad \Gamma(x) \cdot x \cdot \prod_{k=1}^{\infty} (1+\frac{x}{k}) e^{-\frac{x}{k}} = e^{-x \gamma} \text{ - ф-ла Эйлера}$$

### Формула дополнения $\forall x \in (0, 1)$
$$\Gamma(x) \Gamma(1-x) = \frac{\pi}{\sin \pi x}$$

*До-во:*
$$\Gamma(x) \Gamma(1-x) = \lim_{n \to \infty} \frac{n^x n!}{x(x+1)...(x+n)} \lim_{n \to \infty} \frac{n^{1-x} n!}{(1-x)(2-x)...(n+1-x)} =$$
$$=\lim_{n \to \infty} \frac{n^x}{x(1+\frac{x}{1})...(1+\frac{x}{n})} \cdot \lim_{n \to \infty} \frac{n^{1-x} n}{(1-\frac{x}{1})...(1-\frac{x}{n})(n+1)} =$$
$$= \left[ \lim_{n \to \infty} \frac{n}{n+1} \cdot \frac{1}{1-\frac{x}{n+1}} \right] \cdot \lim_{n \to \infty} \frac{1}{x (1-x^2) (1-(\frac{x}{2})^2)...(1-(\frac{x}{n})^2)}$$
$$\underset{1}{\text{"}}$$

---

## Page: page_70.png

# Заголовок лекции
Если известна параметризация $r: U \to \mathbb{R}^n$, $U \subset \mathbb{R}^k$
$$\sigma_k(r(A)) = \int_A \sqrt{det[(r'(x))^* r'(x)]} d\lambda_k(x), A \subset U.$$
## § Примеры
$$dl = \sqrt{(r'(t))^* r'(t)} dt = \varkappa(t) dt$$
1) $k = 1$
$$r(t) = (x_1, x_2, \dots, x_n)$$
$$r'(t) = \begin{pmatrix} \dot{x_1} \\ \dots \\ \dot{x_n} \end{pmatrix} \Rightarrow (r'(t))^* = (\dot{x_1} \dot{x_2} \dots \dot{x_n})$$
$$\varkappa(t) = \sqrt{(\dot{x_1})^2 + \dots + (\dot{x_n})^2} dt \Rightarrow L(\gamma) = \int_a^b ||\dot{x}||_2 dt$$
2) $k = 2, n = 3$
$$r(u,v) = (x(u,v), y(u,v), z(u,v))$$
$$r' = \begin{pmatrix} x_u & x_v \\ y_u & y_v \\ z_u & z_v \end{pmatrix} = \begin{pmatrix} \xi_u & \xi_v \\ \xi_u & \xi_v \end{pmatrix}$$
$$(r')^* = \begin{pmatrix} x_u & y_u & z_u \\ x_v & y_v & z_v \end{pmatrix}$$
$$(r')^* (r') = \begin{pmatrix} (\xi_u, \xi_u) & (\xi_v, \xi_u) \\ (\xi_u, \xi_v) & (\xi_v, \xi_v) \end{pmatrix} = \begin{pmatrix} E & F \\ F & G \end{pmatrix}$$
$$E = (\xi_u, \xi_u) = x_u^2 + y_u^2 + z_u^2$$
$$F = (\xi_u, \xi_v) = x_u x_v + y_u y_v + z_u z_v$$
$$G = (\xi_v, \xi_v) = x_v^2 + y_v^2 + z_v^2$$
$$G(\xi_u, \xi_v) \text{ матрица Грама}$$
$$dS = \sqrt{EG - F^2} du dv$$
### Площадь сферы
2.  1
$$x^2 + y^2 + z^2 = R^2$$
Парам. сфер. коорд.
$$\begin{cases} x = R \cos \varphi \sin \theta \\ y = R \sin \varphi \sin \theta \\ z = R \cos \theta \end{cases}$$
$$\varphi \in [0; 2\pi]$$
$$\theta \in [0; \pi]$$
$$x_\varphi = -R \sin \varphi \sin \theta$$
$$x_\theta = R \cos \varphi \cos \theta$$
$$y_\varphi = R \cos \varphi \sin \theta$$
$$y_\theta = R \sin \varphi \cos \theta$$
$$z_\varphi = 0$$
$$z_\theta = -R \sin \theta$$

---

## Page: page_71.png

```markdown
#  

$$E = (\vec{\xi}_\varphi, \vec{\xi}_\varphi) = (-R\sin\varphi \sin\theta)^2 + (R\cos\varphi \sin\theta)^2 + 0^2 = R^2\sin^2\theta$$
$$G = (\vec{\xi}_\theta, \vec{\xi}_\theta) = R^2$$
$$F = (\vec{\xi}_\varphi, \vec{\xi}_\theta) = 0$$
$$ds = \sqrt{EG-F^2} d\varphi d\theta = R^2\sin\theta d\theta d\varphi$$
$$S_{сферы} = \int_0^{2\pi} d\varphi \int_0^\pi R^2\sin\theta d\theta = 2\pi R^2 \cdot 2 = 4\pi R^2$$

## § 2.2 Площадь цилиндра (боковой пов-ти)
$$S = 2\pi r \cdot h$$
Параш. у.с.к.
\begin{cases}
x = r\cos\varphi \\
y = r\sin\varphi \\
z = z
\end{cases}
$\varphi \in [0; 2\pi]$
$z \in [0; h]$
$$\vec{\xi}_\varphi = (-r\sin\varphi, r\cos\varphi, 0) \qquad E = r^2$$
$$\vec{\xi}_z = (0, 0, 1) \qquad G = 1$$
$$F = 0$$
$$dS = r$$
$$S_{бок.} = \int_0^h dz \int_0^{2\pi} r d\varphi = r \cdot 2\pi \cdot h$$

## § 2.3 Сапог Шварца

$$S_{впис} = 2\pi k S_0$$

$$CK = \frac{h}{k}$$

$C \Delta LAB$
$CK \perp OD$
$$S_0 = \Delta ABC = \frac{1}{2}AB \cdot CD = DB \cdot CD$$
$$DB = r \sin \frac{\pi}{n}$$
$$CD = \sqrt{CK^2 + DK^2} = \sqrt{(\frac{h}{k})^2 + r^2(1 - \cos \frac{\pi}{n})^2}$$
$$S_0 = r\sin \frac{\pi}{n} \sqrt{(\frac{h}{k})^2 + r^2(1 - \cos \frac{\pi}{n})^2}$$
$$S_{впис} = 2\pi k r\sin \frac{\pi}{n} \sqrt{(\frac{h}{k})^2 + r^2(1 - \cos \frac{\pi}{n})^2} \sim \underbrace{2\pi r \sqrt{h^2 + r^2k^2(1 - \cos \frac{\pi}{n})^2}}_{\alpha(k, n)}$$
$$n \cdot \sin \frac{\pi}{n} \sim \pi \qquad k \to \infty$$
$$n \to \infty \qquad  \downarrow n, k \to \infty$$
Может ли $\alpha(k, n) \to 0$. Да, может:
$$2\pi rh \Leftrightarrow \alpha(k, n) \to 0$$
$$\alpha(k, n) = k^2(1 - \cos \frac{\pi}{n})^2 \sim k^2(\frac{\pi}{n})^4 \cdot \frac{1}{4}$$
$$\cos x = 1 - \frac{x^2}{2}$$
при $k = n^2 \longrightarrow \frac{\pi^4}{4}$
если
$k^2 = o(n^4)$
получается лютый сапог
```

---

## Page: page_72.png

# Теорема (об интеграле 1го рода)
Пусть $M$ – гладкое $k$-мерное многообразие в $\mathbb{R}^n$.
Пусть $A \in B(M)$ и $f \in L_1(A, d\sigma_k)$
Тогда $$\int_A f(x) d\sigma_k(x) = \int_{r^{-1}(A)} f(r(t)) x(t) d\lambda_k(t)$$
$A$ лежит в одной карте.

Док-во: 1) Если $f(x) = \chi_B(x)$
тогда надо доказать, что $\int_A \chi_B(x) d\sigma_k(x) = \int_{r^{-1}(A)} \chi_B(r(t)) x(t) d\lambda_k(t)$
$$ \sigma_k(A \cap B) = \int_{r^{-1}(A \cap B)} x(t) d\lambda_k(t)$$
определение

2) Если $f \in Step(A)$, то формула верна ввиду линейности интеграла.

3) Если $f \ge 0$, то $\exists f_n \in Step(A)$: $f_n \nearrow f$
тогда формула верна для $f$ по теореме Беппо Леви.

4) $f = f_+ - f_-$

### Замечание.
1) $\int_A f(x) d\sigma_k(x)$ – это интеграл 1го рода по многообр.
2) Определение интеграла не зависит от параметризации.

Пусть $A \subset r_1(V) \cap r_2(V)$
$\tilde{V} = r_2^{-1}(r_1(V) \cap r_2(V)) \subset V$
$\tilde{U} = r_1^{-1}(r_1(V) \cap r_2(V)) \subset U$

$r_1, r_2$ – разные параметризации.

---

## Page: page_73.png

# Заголовок лекции
## §
$$r_1(\tilde{v}) = r_2(\tilde{v})$$
$$r_2$$
$$\tilde{v}$$
$$r_1$$
$$\tilde{v}$$
$$\varphi$$
$$t$$
$$s$$
$$r_2(\varphi(x)) = r_1(x)$$
Имеем $$\int_A f(x) d\tilde{r}(x) = \int_{r_2^{-1}(A)} f(r_2(s)) \sqrt{det(r_2')^* r_2'} d\lambda_k(s) = $$
$$= \begin{cases} S = \varphi(t) \\ d\lambda_k(s) = ds = |det \varphi'(t)| dt = \sqrt{det (\varphi')^* \varphi'} d\lambda_k(t) \end{cases} =$$
$$= \int_{\varphi^{-1}(r_2^{-1}(A))} f(r_2(\varphi(t))) \cdot \sqrt{det (r_2')^* r_2'} \cdot \sqrt{det (\varphi')^* \varphi'} d\lambda_k(t) =$$
$$= \int_{r_1^{-1}(A)} f(r_1(t)) \sqrt{det \underbrace{(\varphi' r_2')^*}_{(\varphi_2')^*} \underbrace{r_2'(\varphi(t)) \cdot \varphi'(t)}_{r_2'|\varphi(t) \cdot \varphi(t) = r_1'(t)}} d\lambda_k = \int_{r_1^{-1}(A)} f(r_1(t)) \sqrt{det (r_1')^* r_1'} d\lambda_k(t)$$
*диф-ция по ценному правилу, получаем такое соотношение*

**Векторные поля и дифференциальные формы.**

### Опр.
Пусть $G \subset \mathbb{R}^n$ - откр. мн-во.
Гладкое отображение $F: G \to \mathbb{R}^n$ (или $F: G \to \mathbb{R}$) будем наз. гладким *векторным* (или *скалярным*) полем в $G$.

$$F: G \to \mathbb{R}^n$$
$$F(x)$$
$$G$$
$$x$$
$$x$$
$$F(x)$$
*Работа поля!*
$$\vec{F}$$ $$A_F = |\vec{F}| \cdot \cos \alpha \cdot l$$
$$l$$
$$\alpha$$

$$\vec{e}$$ - *единич. касам. вектор*

$$A_F (\gamma) = \int_\gamma (\vec{F}, \vec{e}) dl$$ - *это интеграл 1-го рода*
$$\|$$
$$\int_a^b (F_1 \frac{x_1}{x} + F_2 \frac{x_2}{x} + \dots + F_n \frac{x_n}{x}) x dt = \int_a^b (F_1 \dot{x}_1 + \dots + F_n \dot{x}_n) dt (:=) \int_\gamma F_1 dx_1 + \dots + F_n dx_n = \int_\gamma \omega_{\vec{F}}$$
$$x_1(t), \dots, x_n(t)$$ - *парам. $\gamma$*
$$t \in (a, b)$$ *возр. соотв. напр. $\vec{e}$*
$$\vec{e} = \left( \frac{\dot{x_1}}{x}, \frac{\dot{x_2}}{x}, \dots, \frac{\dot{x_n}}{x} \right)$$
*единичка вектора си-ти*
$$\vec{F} = (F_1, \dots, F_n)$$

*интеграл 2-го рода*

---

## Page: page_74.png

# Лекция (Дата, Глава)
$$ \Pi_F(S) = \iint_S (\vec{F}, \vec{n}) dS := \iint_S \omega^2_F $$
### Опр.
Отображение $L: \mathbb{R}^n \times ... \times \mathbb{R}^n \to \mathbb{R}$ наз. кососимметрической (внешней, или альтернированной) *формой*, если
- 1) $L$ – $k$-линейное отображение, т.е. $L(v_1, ..., \alpha v_i + \beta w, ..., v_k) = \alpha L(v_1, ..., v_i, ..., v_k) + \beta L(v_1, ..., w, ..., v_k)$.
- 2) $L$ – кососимметрическое, т.е. $L(v_1, ..., v_i, ..., v_j, ..., v_k) = -L(v_1, ..., v_j, ..., v_i, ..., v_k)$.

### Пример:
$L(v_1, v_2) = det \begin{vmatrix} v_{11} & v_{12} \\ v_{21} & v_{22} \end{vmatrix}$, где
$v_1 = (v_{11}, v_{12})$
$v_2 = (v_{21}, v_{22})$

### Упр.!
$L(v_1, ..., v_k) = (-1)^\sigma L(v_{\sigma(1)}, ..., v_{\sigma(k)}), \sigma \in \mathfrak{S}_k$

11/04/24
### Замечание:
- 1) Если $\omega$ – косая форма, тогда $\omega(v_1, ..., \underset{i \text{ место}}{v}, ..., \underset{j \text{ место}}{v}, ..., v_k) = 0$ (*два одинак. вектора*)
- 2) $\omega(v_1, ..., \sum_{\substack{j=1 \\ j \neq i}}^k \alpha_j v_j, ..., v_k) = \sum_{\substack{j=1 \\ j \neq i}}^k \alpha_j \omega(v_1, ..., \underset{i \text{ м.}}{v_j}, ..., \underset{j \text{ м.}}{v_j}, v_k) = \sum \alpha_j \cdot 0 = 0$
- 3) Если $\omega$ – $k$-форма в $\mathbb{R}^n$ и $k > n$, то $\omega \equiv 0$.

### Операции над косыми формами
- 1) Альтернация на линейных формах.
Пусть $L$ – $k$-линейная форма в $\mathbb{R}^n$, тогда ее альтернацией наз. кососимметрическая $k$-форма $[L(v_1, ..., v_k)]$.
$$ [L(v_1, ..., v_k)] = \frac{1}{k!} \sum_{\sigma \in \mathfrak{S}_k} sgn \sigma \cdot L(v_{\sigma(1)}, ..., v_{\sigma(k)}) $$
$\underset{\text{альтернация}}{\text{||}}$

---

## Page: page_75.png

# Лекция
## § [Без названия]

Пусть $\tau \in S_k$, $sgn \tau \cdot \omega(\vartheta_{\tau(1)},..., \vartheta_{\tau(k)}) = \frac{1}{k!} \sum_{\sigma \in S_k} sgn \tau \cdot \underbrace{sgn \sigma}_{\substack{sgn \sigma \tau}} \cdot L(\vartheta_{\sigma(\tau(1))},..., \vartheta_{\sigma(\tau(k))}) = \omega(\vartheta_1,..., \vartheta_k)$.
$\eta = \sigma \tau$

$$= \frac{1}{k!} \sum_{\eta \in S_k} sgn \eta L(\vartheta_{\eta(1)},..., \vartheta_{\eta(k)}) = \omega(\vartheta_1,..., \vartheta_k).$$

**Свойства альтернации:**

1° $[[L(\vartheta_1,..., \vartheta_k)]] = [L(\vartheta_1,..., \vartheta_k)]$

m.e. если $\omega$ – косая форма, то $[\omega] = \omega$

$$[\omega(\vartheta_1,..., \vartheta_k)] = \frac{1}{k!} \sum_{\sigma \in S_k} sgn \sigma \omega(\vartheta_{\sigma(1)},..., \vartheta_{\sigma(k)}) = \omega(\vartheta_1,..., \vartheta_k).$$

2° $[L_1(\vartheta_1,..., \vartheta_k) + L_2(\vartheta_1,..., \vartheta_k)] = [L_1] + [L_2]$.

3° $[L(\vartheta_1,..., \underbrace{[\vartheta_i,..., \vartheta_j]}_{p},..., \vartheta_k)] = [L(\vartheta_1,..., \vartheta_k)]$ (устно :) (см. опр. выше)

$$L(\vartheta_1,..., \underbrace{[\vartheta_i,..., \vartheta_j]}_{j-i+1 = p},..., \vartheta_k) = \frac{1}{p!} \sum_{\sigma \in S_p} sgn \sigma L(\vartheta_1,..., \vartheta_{i-1}, \vartheta_{\sigma(i)},..., \vartheta_{\sigma(p)}, \vartheta_{j+1},..., \vartheta_k)$$

## § Внешнее произведение косых форм.

Пусть $\omega^p$ – $p$-форма в $\mathbb{R}^n$, $\omega^l$ – $l$-форма в $\mathbb{R}^n$. /обычное пр-е

$$(\omega^p \wedge \omega^l)(\vartheta_1,..., \vartheta_p, u_1,..., u_l) = \frac{(p+l)!}{p!l!} [\omega^p(\vartheta_1,..., \vartheta_p) \cdot \omega^l(u_1,..., u_l)]$$

$\omega^p \wedge \omega^l$ – $p+l$-форма в $\mathbb{R}^n$

**Свойства:**

1° $(\omega_1^p + \omega_2^p) \wedge \omega^l = \omega_1^p \wedge \omega^l + \omega_2^p \wedge \omega^l$

2° $\omega^p \wedge \omega^l = (-1)^{pl} \omega^l \wedge \omega^p$

3° $(\omega^p \wedge \omega^l) \wedge \omega^k = \omega^p \wedge (\omega^l \wedge \omega^k)$

### Доказательство:

1° Т.к. альтернация линейна.

2° $(\omega^p \wedge \omega^l) (\vartheta_1,..., \vartheta_p, u_1,..., u_l) = \frac{(p+l)!}{p!l!} [\omega^p(a_1,..., a_p) \cdot \omega^l(a_{p+1},..., a_{p+l})] =$
$\alpha_1 ... \alpha_p$ $\alpha_{p+1} ... \alpha_{p+l}$
$$= \frac{(p+l)!}{p!l!} [\omega^l(a_1,..., a_l) \cdot \omega^p(a_{l+1},..., a_{l+p})] (-1)^{pl}$$

Это следует из св-в альтернации

$[L(\vartheta_{\sigma(1)},..., \vartheta_{\sigma(k)})] = sgn \sigma [L(\vartheta_1,..., \vartheta_k)]$.


---

## Page: page_76.png

# Без названия
$$ \frac{1}{k!} \sum_{\tau \in S_k} sgn \tau L(\vartheta_{\tau \sigma(1)},..., \vartheta_{\tau \sigma(k)}) = \frac{1}{k!} \sum_{\tau \in S_k} sgn \sigma sgn \tau \sigma L(\vartheta_{\tau \sigma(1)},..., \vartheta_{\tau \sigma(k)}) = $$
$$ \tau \sigma = \eta \in S_k $$
$$ = sgn \sigma [L(\vartheta_1, ..., \vartheta_k)]$$
$$ \omega^p(a_1, ..., a_p) \omega^l (a_{p+1}, ..., a_{p+l}) = \omega^l(a_{\sigma(1)},..., a_{\sigma(l)}) \omega^p(a_{\sigma(l+1)}, ..., a_{\sigma(l+p)}),$$
$$где \ \sigma = \begin{pmatrix} 1 & 2 & ... & l & l+1 & ... & l+p \\ p+1 & p+2 & ... & p+l & 1 & ... & p \end{pmatrix} sgn \sigma = (-1)^{pl}$$
3° $$(\omega^l \wedge \omega^p) \wedge \omega^k (\vartheta_1, ..., \vartheta_{l+p+k}) =$$
$$ = \frac{(l+p+k)!}{(l+p)! k!} [(\omega^l \wedge \omega^p) (\vartheta_1, ..., \vartheta_{l+p}) \cdot \omega^k (\vartheta_{l+p+1}, ..., \vartheta_{l+p+k})] =$$
$$ = \frac{(l+p+k)!}{(l+p)! k!} \frac{(l+p)!}{l! p!} [\omega^l (\vartheta_1, ..., \vartheta_l) \cdot \omega^p(\vartheta_{l+1}, ..., \vartheta_{l+p}) \cdot \omega^k(\vartheta_{l+p+1}, ..., \vartheta_{l+p+k})] =$$
$$= \frac{(l+p+k)!}{k! p! l!} [\omega^l (\vartheta_1, ..., \vartheta_l) \cdot \omega^p(\vartheta_{l+1}, ..., \vartheta_{l+p}) \cdot \omega^k(\vartheta_{l+p+1}, ..., \vartheta_{l+p+k})] =$$
$$ = \omega^l \wedge (\omega^p \wedge \omega^k)(\vartheta_1, ..., \vartheta_{l+p+k})$$
### Следствие:
пусть $\omega^p$ - $p$-форма и $p$-нечет., тогда $\omega^p \wedge \omega^p = 0$.
4° Внешнее пр-ие 1-форм:
Пусть $L_1, ..., L_k$ - 1-формы, тогда
$$ (L_1 \wedge ... \wedge L_k) (\vartheta_1, ..., \vartheta_k) = det \begin{pmatrix} L_1(\vartheta_1) & ... & L_1(\vartheta_k) \\ L_2(\vartheta_1) & ... & L_2(\vartheta_k) \\ \vdots & & \vdots \\ L_k(\vartheta_1) & ... & L_k(\vartheta_k) \end{pmatrix}$$
### Д-во:
$$ (L_1 \wedge ... \wedge L_k) (\vartheta_1, ..., \vartheta_k) = k! [L_1 (\vartheta_1) \cdot L_2 (\vartheta_2) \cdot ... \cdot L_k(\vartheta_k)] =$$
$$ = \sum_{\sigma \in S_k} sgn \sigma L_1(\vartheta_{\sigma(1)}) L_2(\vartheta_{\sigma(2)})... L_k(\vartheta_{\sigma(k)}) = det [ \ ] .$$
### Опр.
Базисной $p$-формой в $\mathbb{R}^n$ назовем $p$-форму вида
$$ \omega = dx^I := dx^{i_1} \wedge dx^{i_2} \wedge ... \wedge dx^{i_p}, где \ I = \{1 \le i_1 < i_2 < ... < i_p \le n\} \ и$$
$dx^j$ - 1-форма, $dx^j(\vartheta) = \vartheta^j$, где $\vartheta = (\vartheta^1, ..., \vartheta^n)$
коорд. $\vartheta$ в станд. базисе


---

## Page: page_77.png

#  
$$l = \sum_{i=1}^n \vartheta^j e_j, \quad e_j = (0, \underset{j}{\underbrace{-1}}, 0, ..., 0)$$
Количество базисных $p$-форм: $C_n^p$
## §
### Теорема (о каноническом виде косой формы)
Всякая $p$-форма в $\mathbb{R}^n$ имеет вид (в станд. базисе)
$$w^p = \sum_I a_I dx^I, \quad a_I \in \mathbb{R}$$
*До-во:*
$$w^p(\vartheta_1, ..., \vartheta_p) = w^p(\sum_{j_1=1}^n \vartheta_1^{j_1}e_{j_1}, ..., \sum_{j_p=1}^n \vartheta_p^{j_p}e_{j_p}) =$$
линейно по каждому аргументу
$$= \sum_{j_1=1}^n ... \sum_{j_p=1}^n \vartheta_1^{j_1} ... \vartheta_p^{j_p} w^p(e_{j_1}, ..., e_{j_p}) =$$
$$= \sum_{I=\{1 \le j_1 < j_2 < ... < j_p \le n\}} \sum_{\sigma \in S_p} sgn \sigma \vartheta_1^{j_{\sigma(1)}}...\vartheta_p^{j_{\sigma(p)}} w^p(e_{j_1}, ..., e_{j_p}) = \sum_I a_I det \begin{pmatrix} \vartheta_1^{j_1} & ... & \vartheta_1^{j_p} \\ \vdots & & \vdots \\ \vartheta_p^{j_1} & ... & \vartheta_p^{j_p} \end{pmatrix} =$$
$$= \sum_I a_I det \begin{pmatrix} dx^{j_1}(\vartheta_1) & ... & dx^{j_p}(\vartheta_1) \\ \vdots & & \vdots \\ dx^{j_1}(\vartheta_p) & -- & dx^{j_p}(\vartheta_p) \end{pmatrix} = \sum_I a_I (dx^{j_1} \land ... \land dx^{j_p})(\vartheta_1, ..., \vartheta_p) \quad \square$$
### Опр.
Дифференциальной $r$-гладкой $p$-формой в обл. $G \subseteq \mathbb{R}^n$ наз. отображение $w(x, \vartheta_1, ..., \vartheta_p)$, $x \in G$, $\vartheta_i \in \mathbb{R}^n$, т. что
- $\forall x \in G \quad w(x)$ - $p$-форма
- $\forall \vartheta_1, ..., \vartheta_p \quad w(\cdot) (\vartheta_1, ..., \vartheta_p) \in C^r(G)$
- $0$-форма это $C^r$ гладкая ф-ия. $r > 0, 0 \le p \le n$
- Мн-во $r$-гладких $p$-форм в $G \subseteq \mathbb{R}^n$ обознач. $\Lambda_p^r(G)$
- Исп. канон. вид имеем: $w \in \Lambda_p^r(G)$
$$w = \sum_I a_I(x)dx^I, \quad a_I(x) \in C^r(G)$$

## §
### (3) Внешнее диф-ние в $\Lambda_p^r(G)$
$$d: \Lambda_p^r(G) \to \Lambda_{p+1}^r(G)$$
$$dw = \sum_I da_I(x) \land dx^I = \sum_I (\sum_{j=1}^n \frac{\partial a_I}{\partial x^j}(x) dx^j) \land dx^I =$$
$$= \sum_I \sum_j \frac{\partial a_I}{\partial x^j} dx^j \land dx^I = \sum_I \sum_{j \notin I} \frac{\partial a_I}{\partial x^j} dx^j \land dx^I$$

---

## Page: page_78.png

# 15/04/24
## § [Без названия]

### Пример
$\omega_{\vec{f}}(x) = f(x)$, тогда $d\omega_{\vec{f}} = df(x) = \sum_{i=1}^{3} \frac{\partial f}{\partial x_i} dx^i = \omega_{grad f}^1$
$f \in C^r(G)$, $G \subset \mathbb{R}^3$

- $dx^1, dx^2, dx^3$ – базисные 1-формы
- $dx, dy, dz$
$dx \wedge dy, dy \wedge dz, dz \wedge dx$ – базисные 2-формы

$\omega_{\vec{f}}^1 = Pdx + Qdy + Rdz$ – форма работы поля $\vec{F}$
$\vec{F} = (P, Q, R) \in C^r(G)$

$$d\omega_{\vec{f}}^1 = dP \wedge dx + dQ \wedge dy + dR \wedge dz = (\frac{\partial P}{\partial x}dx + \frac{\partial P}{\partial y}dy + \frac{\partial P}{\partial z}dz) \wedge dx +$$
$$+ (\frac{\partial Q}{\partial x}dx + \frac{\partial Q}{\partial y}dy + \frac{\partial Q}{\partial z}dz) \wedge dy + (\frac{\partial R}{\partial x}dx + \frac{\partial R}{\partial y}dy + \frac{\partial R}{\partial z}dz) \wedge dz =$$
$$= \frac{\partial P}{\partial y}dy \wedge dx + \frac{\partial P}{\partial z}dz \wedge dx + \frac{\partial Q}{\partial x}dx \wedge dy + \frac{\partial Q}{\partial z}dz \wedge dy + \frac{\partial R}{\partial x}dx \wedge dz + \frac{\partial R}{\partial y}dy \wedge dz =$$
$$= (\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y})dx \wedge dy + (\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z})dy \wedge dz + (\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x})dz \wedge dx = \omega_{rot \vec{F}}^2$$

### Опр.
Пусть $F \in C^1(G)$, $G \subset \mathbb{R}$, $\vec{F} = (P, Q, R)$
*[НРЗБ: ben.none]*

$$rot \vec{F} = \begin{vmatrix} i & j & k \\ \partial_x & \partial_y & \partial_z \\ P & Q & R \end{vmatrix} = i(R_y + Q_z) + j(R_z - P_x) + k(Q_x - P_y)$$

– ротор поля $\vec{F}$ (или вихрь $\vec{F}$)
cur $\vec{F}$

$\omega_{\vec{F}}^2 = Pdy \wedge dz + Qdz \wedge dx + Rdx \wedge dy$ – форма потока

$$d\omega_{\vec{F}}^2 = dP \wedge dy \wedge dz + dQ \wedge dz \wedge dx + dR \wedge dx \wedge dy =$$
$$= \frac{\partial P}{\partial x}dx \wedge dy \wedge dz + \frac{\partial Q}{\partial y}dy \wedge dz \wedge dx + \frac{\partial R}{\partial z}dz \wedge dx \wedge dy =$$
$$= (\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z})dx \wedge dy \wedge dz = \omega_{div \vec{F}}^3$$

$dx \wedge dy \wedge dz$ – базисные 3-формы в $\mathbb{R}^3$


---

## Page: page_79.png

# Заголовок лекции
## §

### Опр.
Пусть $F \in C^r(G)$, $r \ge 1$
$$div F = tr F' = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$

④ $$\omega^3_f = f dx \wedge dy \wedge dz$$ - форма объема с плотностью $f$.
$$d\omega^3_f = 0.$$

### Теорема (о св-ах $d$)
1) Пусть $\omega \in \Lambda_k^{(r)}(G)$, $G \subseteq \mathbb{R}^n$, $k \ge 0$;
$$dd\omega = 0.$$
2) Пусть $\omega^k \in \Lambda_k^{(r)}(G)$, $\omega^l_q (G)$, $r, q \ge 1$, $k, l \ge 0$
$$d(\omega^k \wedge \omega^l) = d\omega^k \wedge \omega^l + (-1)^k \omega^k \wedge d\omega^l$$ (*q-ла Лейбница*)

### Д-во:
0 Можно считать, что $\omega = a_I(x) dx^I$, $a_I \in C^{(2)}(G)$
$$dx^I = dx^{i_1} \wedge dx^{i_2} ... \wedge dx^{i_k}, \{1 \le i_1 < i_2 < ... < i_k \le n \} = I$$
$$d\omega = da_I \wedge dx^I = \sum_{i=1}^n \frac{\partial a_I}{\partial x^i} dx^i \wedge dx^I$$
$$d(d\omega) = \sum d(\frac{\partial a_I}{\partial x^i}) \wedge dx^i \wedge dx^I = \left( \sum_{i=1}^n \sum_{j=1}^n \frac{\partial^2 a_I}{\partial x^j \partial x^i} dx^j \wedge dx^i \right) \wedge dx^I =$$
$$= \frac{\partial^2 a_I}{\partial x^j \partial x^i} dx^j \wedge dx^i + \frac{\partial^2 a_I}{\partial x^i \partial x^j} dx^i \wedge dx^j = 0$$
т.к. $dx^i \wedge dx^i = - dx^i \wedge dx^j$ и $\frac{\partial^2 a_I}{\partial x^j \partial x^i} = \frac{\partial^2 a_I}{\partial x^i \partial x^j}$

2) $$\omega^k = a_I dx^I$$ , $I = \{ 1 \le i_1 < ... < i_k \le n \}$
$$\omega^l = b_J dx^J$$ , $J = \{ 1 \le j_1 < ... < j_l \le n \}$
$$\omega^k \wedge \omega^l = (a_I dx^I) \wedge (b_J dx^J) = a_I b_J dx^I \wedge dx^J$$
$$d(\omega^k \wedge \omega^l) = d(a_I b_J) \wedge dx^I \wedge dx^J = (b_J da_I + a_I db_J) \wedge dx^I \wedge dx^J =$$
$$= b_J da_I \wedge dx^I \wedge dx^J + a_I db_J \wedge dx^I \wedge dx^J =$$
$$= \underbrace{(da_I \wedge dx^I)}_{d\omega^k} \wedge (\underbrace{b_J dx^J}_{\omega^l}) + db_J \wedge (\underbrace{a_I dx^I}_{(-1)^k a_I dx^I} ) \wedge dx^J = $$
$$= d\omega^k \wedge \omega^l \wedge (-1)^k \omega^k \wedge d\omega^l$$
[Рисунок квадрата]

---

## Page: page_8.png

#  
$$ \Gamma(x)\Gamma(1-x) = \frac{1}{x \prod\limits_{k=1}^{\infty} (1 - \frac{x}{k}^2)} = \frac{1}{\frac{\sin \pi x}{\pi}} = \frac{\pi}{\sin \pi x} $$
$$ \frac{\sin z}{z} = \prod\limits_{k=1}^{\infty} (1 - (\frac{z}{\pi k})^2) \quad \forall z + \pi k \quad k \in \mathbb{Z} $$
(доп-ние)
## §
### Формула удвоения (Лежандр)
$$ B(x, x) = \int\limits_{0}^{1} t^{x-1}(1-t)^{x-1} dt = \int\limits_{0}^{1} (t - t^2)^{x-1} dt = $$
$$ = 2 \int\limits_{0}^{1/2} (t-t^2)^{x-1} dt = 2 \int\limits_{0}^{1/2} (\frac{1}{4} - (\frac{1}{2} - t)^2)^{x-1} dt = $$
$$ = \begin{cases} \frac{1}{2} - t = \frac{1}{2} \sqrt{s} \\ t=0 \to s = 1 \\ t = \frac{1}{2} \to s=0 \\ -dt = \frac{1}{2} \frac{ds}{2\sqrt{s}} \end{cases} = -2 \int\limits_{1}^{0} (\frac{1}{4} - \frac{1}{4} s)^{x-1} \frac{1}{4} s^{-\frac{1}{2}} ds = $$
$$ = \frac{1}{2^{2x-1}} \int\limits_{0}^{1} (1-s)^{x-1} s^{-\frac{1}{2}} ds = \frac{1}{2^{2x-1}} B(x, \frac{1}{2}) \Rightarrow $$
$$ \frac{\Gamma(x)\Gamma(x)}{\Gamma(2x)} = \frac{1}{2^{2x-1}} \frac{\Gamma(x)\Gamma(\frac{1}{2})}{\Gamma(x+\frac{1}{2})} $$
$$ \Gamma(2x) = \frac{\Gamma(x)\Gamma(x+\frac{1}{2})}{\sqrt{\pi}} \cdot 2^{2x-1} $$
$$ x\Gamma(x) = \Gamma(x+1) \text{ можно опред. } \Gamma \text{ для отриц. } x \text{ с помощью этой ф-лы} $$
$$ F(x) = \frac{\Gamma(x+1)}{x} \quad \forall x \in (-1; 0) $$
### Теорема (Формула Лейбница)
Пусть $f = f(x, y), x \in [a, b], y \in [c, d], f \in C([a, b] \times [c, d])$ и $\frac{\partial f}{\partial y} \in C([a, b] \times [c, d])$. Пусть $\alpha: [c, d] \to [a, b]$ - диф-е ф-ии.
Тогда $F(y) = \int\limits_{\alpha(y)}^{\beta(y)} f(x, y) dx$ - диф. ф-ия и


---

## Page: page_80.png

# Заголовок лекции
## §

grad

rot → гладкие вект. поле

div

гладкие скал. поле

Пусть $\nabla = \begin{pmatrix} \partial_x \\ \partial_y \\ \partial_z \end{pmatrix}$ - оператор Гамильтона (набла)

$grad \ u = u\nabla = \begin{pmatrix} u\partial_x \\ u\partial_y \\ u\partial_z \end{pmatrix} = \begin{pmatrix} \frac{\partial u}{\partial x} \\ \frac{\partial u}{\partial y} \\ \frac{\partial u}{\partial z} \end{pmatrix}$

$div \vec{F} = (\nabla, \vec{F}) = \partial_x P + \partial_y Q + \partial_z R$

$rot \vec{F} = \nabla \times \vec{F} = \begin{vmatrix} i & j & k \\ \partial_x & \partial_y & \partial_z \\ P & Q & R \end{vmatrix}$

### Теорема (о некоторых св-ах grad, div, rot)
1) $grad, div, rot$ – линейные операции.
2) Пусть $u \in C^2(G), G \subset \mathbb{R}^3$, тогда $rot(grad \ u) = 0$.
Пусть $\vec{F} \in C^2(G), G \subset \mathbb{R}^3$, $div(rot \ \vec{F}) = 0$.
3) $div(grad \ u) = \Delta u, \ u \in C^2(G)$
$(\nabla \nabla u) = \Delta u$ или $\nabla^2 = \Delta$
4) $rot(rot \ \vec{F}) = grad (div \vec{F}) - \Delta \vec{F}, \ \vec{F} = \begin{pmatrix} \Delta P \\ \Delta Q \\ \Delta R \end{pmatrix}$
$\vec{F} \in C^2(G)$
5) $div (\vec{A} \times \vec{B}) = -(\vec{A}, rot \ \vec{B}) + (\vec{B}, rot \ \vec{A})$
6) упр. $rot (\vec{A} \times \vec{B}) = ?$

### Доказательство:
1) и 3) очевидно (опр.)
2) $\omega^1_{grad f}, d\omega^1_{grad f} = \omega^2_{rot (grad f)} = 0 \Rightarrow rot(grad \ f) = 0$
$$d\omega^1_f$$
$$d^2\omega^0_f$$

---

## Page: page_81.png

# Заголовок лекции
$$d \omega^2_{\operatorname{rot} \vec{F}} = \omega^3 \operatorname{div}(\operatorname{rot} \vec{F}) = d\omega^1_{\vec{F}} = 0 \Rightarrow \operatorname{div}(\operatorname{rot} \vec{F}) = 0.$$
$$\omega^2_{\operatorname{rot} \vec{F}} = d\omega^1_{\vec{F}}$$
4) $$\operatorname{rot}(\operatorname{rot} \vec{F}) = \operatorname{rot} \begin{pmatrix} R_y - Q_z \\ P_z - R_x \\ Q_x - P_y \end{pmatrix} = \begin{pmatrix} Q_{xy} - P_{yy} - P_{zz} + R_{xz} \\ - \\ - \end{pmatrix} = \begin{pmatrix} -P_{xx} - P_{yy} - P_{zz} + (P_x + Q_y + R_z)_x \\ - \\ - \end{pmatrix} =$$
$$ = \begin{pmatrix} -\Delta P + (\operatorname{div} \vec{F})_x \\ - \\ - \end{pmatrix}$$
5) $$\vec{A} \times \vec{B} = \begin{vmatrix} i & j & k \\ A_1 & A_2 & A_3 \\ B_1 & B_2 & B_3 \end{vmatrix} = i(A_2B_3 - B_2A_3) + j(A_3B_1 - B_3A_1) + k(A_1B_2 - B_1A_2)$$
$$\omega^1_{\vec{A}} \wedge \omega^1_{\vec{B}} = (A_1dx + A_2dy + A_3dz) \wedge (B_1dx + B_2dy + B_3dz) =$$
$$= A_1B_2 dx \wedge dy + A_1B_3 dx \wedge dz + A_2B_1 dy \wedge dx + A_2B_3 dy \wedge dz + A_3B_1 dz \wedge dx +$$
$$+ A_3B_2 dz \wedge dy = (A_2B_3 - A_3B_2) dy \wedge dz + (A_3B_1 - A_1B_3) dz \wedge dx +$$
$$\stackrel{\textcircled{3}}{+} (A_1B_2 - A_2B_1) dx \wedge dy = \omega^2_{\vec{A} \times \vec{B}}$$
$$dy \wedge dz \qquad dz \wedge dx \qquad dx \wedge dy$$
$$d(\omega^2_{\vec{A} \times \vec{B}}) = \omega^3_{\operatorname{div}(\vec{A} \times \vec{B})}$$
$$d(\omega^1_{\vec{A}} \wedge \omega^1_{\vec{B}}) = d\omega^1_{\vec{A}} \wedge \omega^1_{\vec{B}} - \omega^1_{\vec{A}} \wedge d\omega^1_{\vec{B}} = \omega^2_{\operatorname{rot} \vec{A}} \wedge \omega^1_{\vec{B}} - \omega^1_{\vec{A}} \wedge \omega^2_{\operatorname{rot} \vec{B}} \stackrel{\textcircled{=}}{=}$$
$\Rightarrow$ *ymb.* $$\omega^1_{\vec{F}} \wedge \omega^2_{\vec{G}} = \omega^3_{(\vec{F}, \vec{G})}$$
$$\omega^1_{\vec{F}} \wedge \omega^2_{\vec{G}} = (Pdx + Qdy + Rdz) \wedge (Ady \wedge dz + Bdz \wedge dx + Cdx \wedge dy) =$$
$$= PA \ dx \wedge dy \wedge dz + OB \ dy \wedge dz \wedge dx + RC \ dz \wedge dx \wedge dy = \omega^3_{(\vec{F}, \vec{G})} \leftarrow$$
$$\stackrel{\textcircled{=}}{=} \omega^3_{(\vec{B}, \operatorname{rot} \vec{A})} - \omega^3_{(\vec{A}, \operatorname{rot} \vec{B})} = \omega^3_{(\vec{B}, \operatorname{rot} \vec{A})} - (\vec{A}, \operatorname{rot} \vec{B})$$
[Рисунок]

---

## Page: page_82.png

# Перенос диф-х форм

Пусть $G \subset \mathbb{R}^n$ - обл., $E \subset \mathbb{R}^n$ - обл., $\varphi: G \to E$ - $C^r$-гладкое.
Тогда $\varphi^*: \Lambda_k^{(r)}(E) \to \Lambda_k^{(r)}(G)$
$$
\begin{array}{c}
\xi_k \in T_x G \quad x \in G \\
\varphi^*(\omega^k)(x) (\xi_1, \dots, \xi_k) = \omega^k(\varphi(x)) (d\varphi(\xi_1), \dots, d\varphi(\xi_k)) \\
\omega^k \in \Lambda_k^{(r)}(E)
\end{array}
$$

## §
### Теорема (о свойствах $\varphi^*$)
- 1) $\varphi^* (d\omega_1^k + p\omega_2^k) = d\varphi^*(\omega_1^k) + p \varphi^* (\omega_2^k)$
- 2) $(\varphi_1 \circ \varphi_2)^* = \varphi_2^* \circ \varphi_1^*$
- 3) $\varphi^* (\omega^k \wedge \omega^l) = \varphi^* \omega^k \wedge \varphi^* \omega^l$
- 4) $d(\varphi^* \omega) = \varphi^* (d\omega)$

### Доказательство
1) $\varphi^* (d\omega_1^k + p\omega_2^k)(x) (\xi_1, \dots, \xi_k) = d\omega_1^k(\varphi(x))(d\varphi(\xi_1), \dots, d\varphi(\xi_k)) + p\omega_2^k(\varphi(x))(d\varphi(\xi_1), \dots, d\varphi(\xi_k)) = (d(\varphi^*\omega_1^k) + p(\varphi^*\omega_2^k))(x)(\xi_1, \dots, \xi_k)$
2) $(\varphi_1 \circ \varphi_2)^* \omega = \omega(\varphi_1 \circ \varphi_2 (x)) (d(\varphi_1 \circ \varphi_2)(\xi_1), \dots, d(\varphi_1 \circ \varphi_2)(\xi_k)) \stackrel{\Theta}{=} \omega(\varphi_1(\varphi_2(x))(d\varphi_1(\varphi_2(x)) (d\varphi_2(\xi_1), \dots, d\varphi_1(\varphi_2(x))(d\varphi_2(\xi_k))) = \varphi_2^* (\varphi_1^* \omega) = (\varphi_2^* \circ \varphi_1^*) \omega$
$$
d(\varphi_1 \circ \varphi_2)(x) = d\varphi_1 (\varphi_2(x)) \circ d\varphi_2(x)
$$
3) $\varphi^* (\omega^k \wedge \omega^l)(x) (\xi_1, \dots, \xi_k, \xi_{k+1}, \dots, \xi_{k+l}) = (\omega^k \wedge \omega^l)(\varphi(x)) (d\varphi(\xi_1), \dots, d\varphi(\xi_{k+l}) = \dots$

---

## Page: page_83.png

```markdown
# Лекция (18/04/24)
$$= \frac{(k+l)!}{k! l!} \frac{\left[w^k(\varphi(x))(d\varphi(\xi_1), ..., d\varphi(\xi_k)) \cdot w^l(\varphi(x))(d\varphi(\xi_{k+1}), ..., d\varphi(\xi_{k+l}))\right]}{(\varphi^*w)^k(x)(\xi_1,...,\xi_k) \cdot (\varphi^*w)^l(x)(\xi_{k+1},...,\xi_{k+l})}$$
## Теорема (о координатном представлении $\varphi^*$)
Пусть $x = \varphi(t)$, $t \in G$, $x \in E$

$\omega \in \Lambda_k(E)$, $\omega(x) = \sum_I a_I dx^I$, $dx^I = dx^{i_1} \land ... \land dx^{i_k}$
Тогда:
$$(\varphi^* \omega)(t) = \sum_I a_I(\varphi(t)) \sum_J \frac{\partial(x^{i_1}, ..., x^{i_k})}{\partial(t^{j_1}, ..., t^{j_k})} dt^{j_1} \land ... \land dt^{j_k}$$
$$J = \{1 \le j_1 < j_2 < ... < j_k \le n \}.$$
$x = \varphi(t)$
$t \in G \subset \mathbb{R}^n$
### Пример:
$\omega = \frac{xdx + ydy}{\sqrt{x^2 + y^2}}$ в $\mathbb{R}^2 \setminus \{0\}$
$\gamma = \frac{ydx - xdy}{x^2 + y^2}$ в $\mathbb{R}^2 \setminus \{0\}$
$f^* \omega = \frac{r\cos\varphi d(r\cos\varphi) + r\sin\varphi d(r\sin\varphi)}{r} =$
$= \frac{r\cos\varphi (\cos\varphi dr - r\sin\varphi d\varphi) + r\sin\varphi(\sin\varphi dr + r\cos\varphi d\varphi)}{r} = (\underbrace{\cos^2\varphi + \sin^2\varphi}_{=1}) dr + (\underbrace{-\cos\varphi\sin\varphi + \sin\varphi\cos\varphi}_{=0}) d\varphi =$
$= dr$

\begin{cases}
x = r\cos\varphi \\
y = r\sin\varphi
\end{cases}

[Рисунок]

$f^* \gamma = \frac{r\sin\varphi(\cos\varphi dr - \sin\varphi) - r\cos\varphi(\sin\varphi dr + \cos\varphi d\varphi)}{r} = d\varphi(-\sin^2\varphi - \cos^2\varphi) = -d\varphi$

### Доказательство:
Ввиду лин-сти опред. $\varphi^*$, будем считать, что
$\omega = a_I(x) dx^{i_1} \land ... \land dx^{i_k}$ - одна базис. форма с коэф. $a_I(x)$
$$(\varphi^* \omega)(\xi_1, ..., \xi_k) = a_I(\varphi(t))(dx^{i_1} \land ... \land dx^{i_k})(d\varphi(t)(\xi_1) ... d\varphi(t)(\xi_k)) =$$
```

---

## Page: page_84.png

```markdown
# Заголовок лекции
$$
\begin{vmatrix}
dx^{i_1} (d\varphi(t)(\xi_1)) & \dots & dx^{i_1} (d\varphi(t)(\xi_k)) \\
\vdots & \ddots & \vdots \\
dx^{i_k} (d\varphi(t)(\xi_1)) & \dots & dx^{i_k} (d\varphi(t)(\xi_k))
\end{vmatrix} =
$$
$$
= a_I (\varphi(t))
\begin{vmatrix}
d\varphi^{i_1}(t)(\xi_1) & \dots & d\varphi^{i_1}(t)(\xi_k) \\
\vdots & \ddots & \vdots \\
d\varphi^{i_k}(t)(\xi_1) & \dots & d\varphi^{i_k}(t)(\xi_k)
\end{vmatrix} = a_I (\varphi(t))
\begin{vmatrix}
\sum_{j=1}^n \frac{\partial \varphi^{i_1}}{\partial t^j} \xi_1^j & \dots & \sum_{j=1}^n \frac{\partial \varphi^{i_1}}{\partial t^j} \xi_k^j \\
\vdots & \ddots & \vdots \\
\sum_{j=1}^n \frac{\partial \varphi^{i_k}}{\partial t^j} \xi_1^j & \dots & \sum_{j=1}^n \frac{\partial \varphi^{i_k}}{\partial t^j} \xi_k^j
\end{vmatrix}
$$

$$
g_{tp} = \sum_{j=1}^n \frac{\partial \varphi^{i_t}}{\partial t^j} \xi_p^j
$$

$$
= a_I (\varphi(t))
\begin{vmatrix}
\frac{\partial \varphi^{i_1}}{\partial t^1} & \dots & \frac{\partial \varphi^{i_1}}{\partial t^n} \\
\vdots & \ddots & \vdots \\
\frac{\partial \varphi^{i_k}}{\partial t^1} & \dots & \frac{\partial \varphi^{i_k}}{\partial t^n}
\end{vmatrix}
\begin{bmatrix}
\xi_1^1 & \dots & \xi_k^1 \\
\vdots & \ddots & \vdots \\
\xi_1^n & \dots & \xi_k^n
\end{bmatrix}
= a_I (\varphi(t)) \sum_{\sigma \in S_k} sgn \sigma \cdot g_{1\sigma(1)} \dots g_{k\sigma(k)} =
$$
$$
= a_I (\varphi(t)) \sum_{\sigma \in S_k} sgn \sigma \left( \sum_{j_1 = 1}^n \frac{\partial \varphi^{i_1}}{\partial t^{j_1}} \xi_{\sigma(1)}^{j_1} \right) \dots \left( \sum_{j_k = 1}^n \frac{\partial \varphi^{i_k}}{\partial t^{j_k}} \xi_{\sigma(k)}^{j_k} \right) =
$$
$$
= a_I (\varphi(t)) \sum_{j_1 = 1}^n \sum_{j_2 = 1}^n \dots \sum_{j_k = 1}^n \frac{\partial \varphi^{i_1}}{\partial t^{j_1}} \frac{\partial \varphi^{i_2}}{\partial t^{j_2}} \dots \frac{\partial \varphi^{i_k}}{\partial t^{j_k}} \left[ \sum_{\sigma \in S_k} sgn \sigma \cdot \xi_{\sigma(1)}^{j_1} \dots \xi_{\sigma(k)}^{j_k} \right] =
$$
замечается / det
при дишак.
инд.
$$
\begin{bmatrix}
\xi_1^{j_1} & \dots & \xi_k^{j_1} \\
\vdots & \ddots & \vdots \\
\xi_1^{j_k} & \dots & \xi_k^{j_k}
\end{bmatrix}
$$
$$
= a_I (\varphi(t)) \sum_{1 \le j_1 < \dots < j_k \le n} \sum_{\tau \in S_k} sgn \tau \frac{\partial \varphi^{i_1}}{\partial t^{\tau(1)}} \frac{\partial \varphi^{i_2}}{\partial t^{\tau(2)}} \dots \frac{\partial \varphi^{i_k}}{\partial t^{\tau(k)}} \cdot det
\begin{bmatrix}
\xi_1^{j_1} & \dots & \xi_k^{j_1} \\
\vdots & \ddots & \vdots \\
\xi_1^{j_k} & \dots & \xi_k^{j_k}
\end{bmatrix} =
$$
$$
= a_I (\varphi(t)) \sum_J \frac{\partial (\varphi^{i_1}, \dots, \varphi^{i_k})}{\partial (t^{j_1}, \dots, t^{j_k})} \cdot
\begin{vmatrix}
\xi_1^{j_1} & \dots & \xi_k^{j_1} \\
\vdots & \ddots & \vdots \\
\xi_1^{j_k} & \dots & \xi_k^{j_k}
\end{vmatrix}
$$
$$
dt^{j_1} \land \dots dt^{j_k} (\xi_1, \dots, \xi_k)
$$
$$
x = \varphi(t) \Leftrightarrow x^i = \varphi^i(t)
$$
$$
q.e.d.
$$

### Теорема (о свойствах $\varphi^*$)
1) Пусть $\omega \in \Lambda_k^{(n)} (G)$, $G \subset \mathbb{R}^n$, $\varphi : \mathbb{R}^n \to G$ гладк.
Тогда $d(\varphi^* \omega) = \varphi^*(d\omega)$

Д-во: Будем считать, что $\omega = a_I dx^I$, $I = \{ 1 \le i_1 < \dots < i_k \le m \}$
$$
\varphi^*(d\omega) = \varphi^*(da_I \land dx^I) = \varphi^* \left( \sum_{i=1}^m \frac{\partial a_I}{\partial x^i} dx^i \land dx^I \right) =
$$
$$
= \sum_{i=1}^m \frac{\partial a_I}{\partial x^i} (\varphi(t)) \sum_J \underbrace{\frac{\partial (x^{i_1}, x^{i_2}, \dots, x^{i_k})}{\partial (t^{j_1}, \dots, t^{j_{k+1}})}}_{= K (\text{опред-ль})} dt^{j_1} \land \dots \land dt^{j_{k+1}}
$$
```

---

## Page: page_85.png

```markdown
# Заголовок лекции
$$d(\varphi^*\omega) = \sum_{1 \le j_1 < ... < j_k \le k} d(a_I(\varphi(t))k) \wedge dt^{j_1} \wedge ... \wedge dt^{j_k} = \sum_I a_I(\varphi(t))dk \wedge dt^j + \sum_j da_I(\varphi(t)) \cdot k \wedge dt^j$$
$$a_I(\varphi(t)) dk + da_I(\varphi(t)) \cdot k$$
$$dk = d\left(\sum_{\sigma \in S_k} sgn \sigma \frac{\partial x^{i_1}}{\partial t^{j_{\sigma(1)}}} \cdot \frac{\partial x^{i_2}}{\partial t^{j_{\sigma(2)}}} ... \frac{\partial x^{i_k}}{\partial t^{j_{\sigma(k)}}}\right) = \sum_{\sigma \in S_k} \sum_{1 \le p \le k} sgn \sigma \frac{\partial x^{i_1}}{\partial t^{j_{\sigma(1)}}}...\underbrace{d\left(\frac{\partial x^{i_p}}{\partial t^{j_{\sigma(p)}}}\right)}_{\sum_{j=1}^n \frac{\partial^2 x^{i_p}}{\partial t^{j_{\sigma(p)}} \partial t^j} dt^j} ... \frac{\partial x^{i_k}}{\partial t^{j_{\sigma(k)}}} =$$
$$= \sum_{\sigma \in S_k} \sum_{1 \le p \le k} \sum_{j=1}^n sgn \sigma \frac{\partial x^{i_1}}{\partial t^{j_{\sigma(1)}}} ... \frac{\partial x^{i_p}}{\partial t^{j_{\sigma(p)}}}dt^j...\frac{\partial x^{i_k}}{\partial t^{j_{\sigma(k)}}}dt^j$$
$$dk \wedge dt^{j_1} \wedge ... \wedge dt^{j_k} = \sum_{\sigma \in S_k} \sum_{1 \le p \le k} \sum_{j=1}^n sgn \sigma \frac{\partial x^{i_1}}{\partial t^{j_{\sigma(1)}}}...\frac{\partial^2 x^{i_p}}{\partial t^{j_{\sigma(p)}} \partial t^j} dt^j \wedge dt^{j_1} \wedge ... \wedge dt^{j_k}$$
$$\Rightarrow \sum_j \sum_{\sigma \in S_k} \sum_{1 \le p \le k} \sum_{j \neq j} sgn \sigma \left\{\frac{\partial^2 x^{i_p}}{\partial t^{j} \partial t^{j_{\sigma(p)}}} \right\}dt^j \wedge dt^{j_1} \wedge ... \wedge dt^{j_{\sigma(p)}} \wedge ... \wedge dt^{j_k}$$
$$1 \le j_1 < j_2 < j_3 < ... < j_k \le n$$
$$j_{\sigma(p)}$$
*была* упорядоч. послед-ть $\Rightarrow$ *взяли и переставили*

$$dt^j \wedge dt^{j_1} \wedge dt^{j_2} \wedge dt^{j_3} \wedge ...$$
$$dt^{j_2} \wedge dt^{j_1} \wedge dt^{j_2} \wedge dt^{j_3} \wedge ...$$

*нечет. кол-во* перес.
$\Rightarrow$ *вытезаем мишус*
$\Rightarrow$ *все запутаемся*

$$\sum_j da_I(\varphi(t)) k \wedge dt^j$$
$$\varphi^*(d\omega) = \varphi^*\left( \sum_{i=1}^m \frac{\partial a_I}{\partial x^i} dx^i \wedge dx^I \right) = \sum_{i=1}^m \frac{\partial a_I}{\partial x^i}(\varphi(t)) \sum_I \frac{\partial (x^i, x^{i_1}, ..., x^{i_k})}{\partial (t^{j_1}, ..., t^{j_{k+1}})} dt^y$$

$$\frac{\partial (x^i, x^{i_1}, ..., x^{i_k})}{\partial (t^{j_1}, ..., t^{j_{k+1}})} = \begin{vmatrix} \frac{\partial x^i}{\partial t^{j_1}} & \frac{\partial x^i}{\partial t^{j_p}} & \frac{\partial x^i}{\partial t^{j_{k+1}}} \\ \frac{\partial x^{i_1}}{\partial t^{j_1}} & ... & \frac{\partial x^{i_1}}{\partial t^{j_{k+1}}} \\ \vdots & & \vdots \\ \frac{\partial x^{i_k}}{\partial t^{j_1}} & ... & \frac{\partial x^{i_k}}{\partial t^{j_{k+1}}} \end{vmatrix} = \sum_{p=1}^{k+1} \frac{\partial x^i}{\partial t^{j_p}} (-1)^p \begin{vmatrix} \frac{\partial x^{i_1}}{\partial t^{j_1}} & .. & \frac{\partial x^{i_1}}{\partial t^{j_{k+1}}} \\ \vdots & & \vdots \\ \frac{\partial x^{i_k}}{\partial t^{j_1}} & ... & \frac{\partial x^{i_k}}{\partial t^{j_{k+1}}} \end{vmatrix} $$

*Упр: думать*
```

---

## Page: page_86.png

# 22.04.24
## Многообразие с краем
### Опр.
Топологическое Хаусдорфово пр-во $M$ со $2^\text{ой}$ аксиомой счётности наз. *тополог. или мног-ием разм. $k \in \mathbb{N}$ (тополог. или-ием с краем)*, если
$$\forall x \in M \ \exists \text{ окр. } U_x \subset M \text{ и гомеоморфизм } \varphi: U_x \to \mathbb{R}^k$$
(или гомеоморфизм $\psi: U_x \to \mathbb{H}^k$)
где $\mathbb{H}^k = \{x \in \mathbb{R}^k: x_k > 0 \}$.

### Опр.
Край многообр-ия $M$ - это точки $x \in M$, для которых $\exists$ гомеоморф. $\psi: U_x \to \mathbb{H}^k$.

**Обозн.:** $\partial M$.

**Упр.:** сравнить с опр. гладкого мн-ия в $\mathbb{R}^k$.

### Опр.
$(V_x, \varphi)$ – локал-ая карта точки $x \in M$.
$\varphi(x) = y = (y_1, ..., y_k)$ – лок. коорд. точки $x \in M$.

$$Атлас \ A(M) = \bigcup_{x \in M} (U_x, \varphi)$$

### Определение
Отображение соседства $\varphi_{xy}$: $\varphi_x(U_x \cap U_y) \to \varphi_y(U_x \cap U_y)$
$$\varphi_{xy} = \varphi_y \circ (\varphi_x)^{-1}$$
### Опр.
Мн-ие $C^r$-гладкое, $r \ge 1$, если каждое отображ-ие соседства явл. $C^r$ гладким.
*k-мерного*
*k-1 мерн.*
### Предложение:
край $k$-многообразия $\partial M$ явл. $k-1$ многообразием без края, т.е. $\partial(\partial M) = \emptyset$.
### Доказательство:
Пусть $x \in \partial M$, тогда $\exists$ окр. $U_x \subset M$ и $\psi$ – гомеом-м $\psi: U_x \to \mathbb{H}^k$

$$\psi(x) = \underbrace{(0, ..., 0)}_{k}$$
$$\forall y \in \partial M \cap U_x \quad \psi(y) = (u_1, ..., u_{k-1}, 0)$$

---

## Page: page_87.png

# 
$$x \in \partial M$$
$$\tilde{U_x} := \partial M \cap U_x$$ - окр-ть в $\partial M$ точки $x$
Тогда $\forall y \in \tilde{U_x} \quad \tilde{\varphi}(y) = (u_1, ..., u_{k-1}) = Pr_{\mathbb{R}^{k-1}} \varphi: \tilde{U_x} \to \mathbb{R}^{k-1}$ - *гачкеоморфизм*
$$\partial M = \bigcup_{x \in \partial M} U_x$$
$\Rightarrow \partial M$ - многообразие и $\partial(\partial M) = \phi$

*q.e.d.*

## Примеры многообразий
- ① $x^2 + y^2 + z^2 = 1$
  - 2-мерное без края
- ②
  - край лин-ие
  - $\mathbb{R}_1$ полупрямая
- ③ $x^2 + y^2 + z^2 \le 1$
  - $z \ge 0$
  - $\bar{B}(0, 1)$
  - $\partial(\bar{B}(0, 1)) = S^2$
- ④ $x^2 + y^2 + z^2 = 1 \quad z > 0$
  - 2-мерное лин-ие без края
- ⑤
  - многообр. с краем
  - край (добавили к 4)
  - ашкр. дамни. не многообразие (не отобразим эту лепешку)

### Теорема (Уитни)
Всякое гладкое $k$-мерное многообразие может быть вложено в $\mathbb{R}^{N_k}$ ($N_k = 2k$ ?)


---

## Page: page_88.png

# Заголовок лекции (Дата, Глава)
## § Ориентация многообразия
### Опр.
Два базиса в $\mathbb{R}^n$ $\{e_1, ..., e_n\}$ и $\{e'_1, ..., e'_n\}$ задают одинаковую ориентацию, если матрица перехода между базисами имеет $det > 0$.

м.е. $Ae_k = e'_k \quad \forall k = 1, ..., n \quad \& \quad det A > 0$
### Опр.
Ориентация $\mathbb{R}^n$ – это класс экв-ти одинак. ориент. базисов
$$e_1 = (1, 0, ..., 0)$$
$$e_n = (0, ..., 0, 1)$$ – задаёт "положит." ориентацию

### Опр.
Пусть $M$ – $k$-мерное многообразие и $(U_1, \varphi_1)$ и $(U_2, \varphi_2)$ – две карты. Тогда они наз. эквив-ми, если
- 1) либо не пересекаются
- 2) либо отображение соседства $\varphi_1 \circ \varphi_2^{-1}$ имеет положит. якобиан.

1-ый базис в $T_xM$:
$$\begin{cases}
\xi_1 = d \varphi_1^{-1}(e_1) \\
\xi_2 = d \varphi_1^{-1}(e_2) \\
\vdots \\
\xi_k = d \varphi_1^{-1}(e_k)
\end{cases}$$

2-ой базис:
$$\begin{cases}
\eta_1 = d \varphi_2^{-1}(e_1) \\
\vdots \\
\eta_k = d \varphi_2^{-1}(e_k)
\end{cases}$$

$$\varphi_1^{-1} = r_1, \quad \varphi_2^{-1} = r_2$$

$$\xi_m = \begin{pmatrix}
\frac{\partial r_1^1}{\partial u^1} & ... & \frac{\partial r_1^1}{\partial u^k} \\
\vdots & & \vdots \\
\frac{\partial r_1^k}{\partial u^1} & ... & \frac{\partial r_1^k}{\partial u^k}
\end{pmatrix} t_m \quad \eta_p = \begin{pmatrix}
\frac{\partial r_2^1}{\partial u^1} & ... & \frac{\partial r_2^1}{\partial u^k} \\
\vdots & & \vdots \\
\frac{\partial r_2^k}{\partial u^1} & ... & \frac{\partial r_2^k}{\partial u^k}
\end{pmatrix} e_p$$

---

## Page: page_89.png

# Заголовок лекции (Дата, Глава)
$$
\varepsilon_p = \begin{pmatrix} \varepsilon_1 \\ \vdots \\ \varepsilon_k \end{pmatrix}
$$
$$
\varepsilon_\eta = Ae = AB^{-1}\eta
$$
$$
AB^{-1} = r_1 \circ (r_2')^{-1}
$$
$AB^{-1}$ - матр. перехода между $\varepsilon$ и $\eta$
$$det(AB^{-1}) > 0$$
$$
(\varphi_1 \circ \varphi_2^{-1})' = \varphi_1' \circ (\varphi_2^{-1})' = (r_1^{-1})' \circ r_2'
$$
$$
sgn \left( det \left( (r_1^{-1})' \circ r_2' \right) \right) = sgn \left( det \left( r_1' \circ (r_2')^{-1} \right) \right)
$$
### Опр.
*Атлас* $\mathcal{A}(M)$ наз. *ориентирующим*, если все карты эквивалентны.

- *Многообразие* $M$ наз. *ориентируемым*, если у него есть ориентирующий атлас.
- *Ли-ние* $M$ наз. *ориентированным*, если на нём выбран ориентирующий атлас.
- *Ориентация* $M$ - класс экв. ориентирующего атласа.
- Два атласа $\mathcal{A}_1(M)$ и $\mathcal{A}_2(M)$ наз. экв-ми, если атлас $\mathcal{A}_1(M) \cup \mathcal{A}_2(M)$ явл. ориентирующим.

### Примеры
1.  Одномерное гладкое многообразие - всегда ориентируемо
    1.1. $y$ - гладкая кривая

    [Рисунок кривой]

    $$x = y(t)$$
    $y$ - гомеоморфизм

    [Рисунок прямой с направлением вправо]

    $t \in (a, b)$ 1 карта
    1.2.

    [Рисунок окружности с обозначениями]

    $M \stackrel{\gamma}{\curvearrowright} \gamma(a) = \gamma(b)$

    $\gamma: [a, b] \to \mathbb{R}^n$
    $$\gamma(a) = \gamma(b)$$
    2 карты

    $\varphi = \gamma^{-1}: M \to (a, b)$ - 1-ая карта

2.
    2.1.

    [Рисунок поверхности и базисных векторов]

    шор

    параметр-ия тора:
    $$\begin{cases} x = (b + a \cos \psi) \cos \varphi \\ y = (b + a \cos \psi) \sin \varphi \end{cases}$$


---

## Page: page_9.png

```markdown
#  
$$F_y = \int_{d(y)}^{p(y)} f'_y (x, y) dx + f(p(y), y) \cdot p'_y - f(d(y), y) \cdot d'_y.$$
## 
### Д-во: Рассмотрим
$$\Phi(a, b, y) = \int_a^b f(x, y) dx, \quad \Phi: \mathbb{R}^3 \to \mathbb{R}.$$
Покажем, что $\Phi$ - диф.-ма.
Достаточно показать, что $\frac{\partial \Phi}{\partial a}$, $\frac{\partial \Phi}{\partial b}$, $\frac{\partial \Phi}{\partial y}$ - непр. ф-ии.
$$\frac{\partial \Phi}{\partial a} = -f(a, y)$$
$$\frac{\partial \Phi}{\partial b} = f(b, y)$$
$$\frac{\partial \Phi}{\partial y} = \int_a^b \frac{\partial f}{\partial y}(x, y) dx.$$

м.к. $\frac{\partial f}{\partial y}$ - *непр.* $\Rightarrow$ $\exists$ конст. $M$: $\left| \frac{\partial f}{\partial y} \right| \le M$
$\Rightarrow$ применена ш. о диф-нии ИЗоП.

$\Rightarrow$ все ч.пр-ые *непр.* $\Rightarrow$ $\Phi$ диф.-ма.
$$F(y) = \Phi(d(y), p(y), y) \text{ - композиция}$$
$\Rightarrow$ $F$-диф.-ма и $F'_y = \frac{\partial \Phi}{\partial a} d'_y + \frac{\partial \Phi}{\partial b} p'_y + \frac{\partial \Phi}{\partial y} = -f(d(y), y) d'_y + f(p(y), y) p'_y + \int_{d(y)}^{p(y)} f'_y(x, y) dx.$

### Пример
$$I_n = \frac{1}{(n-1)!} \int_0^x f(t) (x-t)^{n-1} dt$$

$$n = 1 \quad I_1(x) = \int_0^x f(t) dt$$
$$I'_1(x) = f(x)$$
$$\frac{d^n}{dx^n} I_n(x) = f(x)$$
1) $I'_n = \frac{1}{(n-1)!} \int_0^x f(t) (n-1)(x-t)^{n-2} dt + \frac{1}{(n-1)!} f(x)(x-x)^{n-1} \cdot 1 = \frac{1}{(n-2)!} \int_0^x f(t) (x-t)^{n-2} dt = I_{n-1}$

$I'_{n-1} = I_{n-2} \Rightarrow I_n^{(n)} = I_{n-1}^{(n-1)} = I_{n-2}^{(n-2)} = I_1' = f(x)$.
$f(x) = D^{(n)} I_n f(x)$ - производная порядка $n$ от интегр. опер. от $f$.
$$I_d f(x) = \frac{1}{\Gamma(d)} \int_0^x f(t) (x-t)^{d-1} dt$$
```

---

## Page: page_90.png

# 25/04/24
## §
### Лист Мёбиуса - 2 мерное неориент. многообразие в $\mathbb{R}^3$
$$z = a\sin\psi$$
$$\varphi \in [0; 2\pi]$$
$$\psi \in [0; 2\pi]$$

2 карты?
упр.
$$
\begin{cases}
x = (a\cos\varphi + b)\cos\varphi \\
y = (a\cos\varphi + b)\sin\varphi \\
z = a\sin\varphi
\end{cases}
$$
парам-[НРЗБ]
тора

Возьмем
$$
\begin{cases}
x = (b+r\cos\frac{\varphi}{2})\cos\varphi \\
y = (b+r\cos\frac{\varphi}{2})\sin\varphi \\
z = r\sin\frac{\varphi}{2}
\end{cases}
$$
$r \in (-a, a)$
$\varphi \in (0, 2\pi)$

параметризация листа Мёбиуса

Рассмотрим $r=0$
$$
\begin{cases}
x = b\cos\varphi \\
y = b\sin\varphi \\
z = 0
\end{cases}
$$
- окружность.
Пойдем вдоль этой окружности. Посмотрим как будут меняться касательные вектора

Касательные вектора:
$$\overrightarrow{\xi_1} = \begin{pmatrix} x_\varphi \\ y_\varphi \\ z_\varphi \end{pmatrix} = \begin{pmatrix} -\sin\varphi(b+r\cos\frac{\varphi}{2}) + \cos\varphi(r(-\sin\frac{\varphi}{2}) \cdot \frac{1}{2}) \\ \cos\varphi(b+r\cos\frac{\varphi}{2}) + \sin\varphi(r(-\sin\frac{\varphi}{2}) \cdot \frac{1}{2}) \\ r\cos\frac{\varphi}{2} \cdot \frac{1}{2} \end{pmatrix}$$

$r=0$
$$\overrightarrow{\xi_1} = \begin{pmatrix} -\sin\varphi \cdot b \\ \cos\varphi \cdot b \\ 0 \end{pmatrix}$$

$$\overrightarrow{\xi_2} = \begin{pmatrix} x_r \\ y_r \\ z_r \end{pmatrix} = \begin{pmatrix} \cos\varphi \cdot \cos\frac{\varphi}{2} \\ \sin\varphi \cdot \cos\frac{\varphi}{2} \\ \sin\frac{\varphi}{2} \end{pmatrix}$$
$$\overrightarrow{\xi_2}(0) = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \quad \overrightarrow{\xi_2}(2\pi) = \begin{pmatrix} -1 \\ 0 \\ 0 \end{pmatrix}$$

Базисы $(\overrightarrow{\xi_1}(0), \overrightarrow{\xi_2}(0))$ и $(\overrightarrow{\xi_1}(2\pi), \overrightarrow{\xi_2}(2\pi))$ задают разную ориентацию

$\Rightarrow$ Лист Мёбиуса не ориент.

### Бутылка Клейна содержит лист Мёбиуса $\Rightarrow$ не ориент.


---

## Page: page_91.png

#  Грасманниан

$Gr_n^k(\mathbb{R})$ - мн-во всех $k$-мерных под-в в $\mathbb{R}^n$.
Зададим карты $\mathcal{M}_{U, V}$ след. образом: $U, V$ - подпр-во $\mathbb{R}^n$
пусть $dim U = k$, $dim V = n-k$, $U \oplus V = \mathbb{R}^n$.

Пусть $H \in \mathcal{M}_{U, V} \Leftrightarrow H \cap V = \{0\}$. Ясно $U \in \mathcal{M}_{U, V}$

[Рисунок]

$U \oplus V = \mathbb{R}^2$
т.к. $H \cap V = \{0\}$, то $H$ - есть график линейного отображения
$A_H : U \to V$
$dim \ k$  $dim \ n-k$

$\Rightarrow$ т.е. $A_H$ - есть матрица $k \times (n-k)$

$\mathcal{M}_{U, V}$ отображается в $\mathbb{R}^{k \times (n-k)}$

$\Rightarrow dim \ Gr_n^k(\mathbb{R}) = k \times (n-k)$ и $Gr_n^k(\mathbb{R})$ - много-ие без края (гладкое) и оно будет ориентир.

при $k = 1$ $Gr_n^1(\mathbb{R}) = \mathbb{P}\mathbb{R}^{n-1}$ - веще-ое проективное пр-во разм. $n-1$.

[Рисунок]

$\mathbb{P}\mathbb{R}^1$ - проективная прямая.
Нужно 2 карты, чтобы покрыть всю проективную прямую

Способы задания ориентации

1) С помощью задания ориентирующего Атласа, т.е. придумывать параметризацию Mleor-ие с согласованными между собой отображениями перехода.
2) С помощью непрерывно деформируемого базиса в касательном пр-ве.

[Рисунок]

3) Если $dim M = n-1$ и $M \subset \mathbb{R}^n$, то с помощью вектора внешней нормали.

---

## Page: page_92.png

# Заголовок лекции
## §
### Опр.
Вектор $\vec{n} \perp T_xM$ наз. вектором *внешней нормали*, если базис в $\mathbb{R}^k$ $\{\vec{n}, \vec{\xi}_{(1)}, ..., \vec{\xi}_{(k-1)}\}$, где $\{\vec{\xi}_{(1)}, ..., \vec{\xi}_{(k-1)}\}$ - базис в $T_xM$, эквивалентен базису $\{e_1, ..., e_n\}$ в $\mathbb{R}^k$.

[Рисунок с векторами $e_1, e_2, e_3$ и поверхностью с вектором $\vec{n}$ и векторами $\vec{\xi}_1, \vec{\xi}_2$]

### Предложение (об ориент. края)
Пусть $M$ - *k*-мерное ориентируемое многообразие с краем, тогда $\partial M$ - ориент. многообразие.

Кроме того, если $\mathcal{A}(M) = \{(U_\alpha, \varphi_\alpha), \varphi_\alpha: U_\alpha \to \mathbb{R}^k \}$ - ориентирующий атлас, то $\mathcal{A}(\partial M) = \{(U_\alpha \cap \partial M, \varphi_\alpha|_{\partial M})\}$ - ориент. атлас в $\partial M$. (верхнее полупространство)

### Док-во:
Рассмотрим отображение соседства $\psi: \varphi_\alpha(U_\alpha \cap U_\beta) \to \varphi_\beta(U_\alpha \cap U_\beta)$.

[Рисунок с многообразием $M$ и отображениями $\varphi_\alpha, \varphi_\beta, \psi$ в $\mathbb{H}^k$]

Или знаешь $det \psi' > 0$ (т.к. $\mathcal{A}(M)$ - ориент-ий).

Надо доказать, что $det((\psi|_{\partial \mathbb{H}^k})') > 0$.
$$\psi(x) = (\psi^1(x), ..., \psi^k(x))$$
$$\psi^k(\underbrace{x_1, ..., x_{k-1}}_{\partial \mathbb{H}^k}, 0) = 0.$$

*k*-ая компонента

$$det \psi'(x_1, ..., x_{k-1}, 0) = det \begin{pmatrix} \frac{\partial \psi^1}{\partial x_1} & \cdots & \frac{\partial \psi^1}{\partial x_{k-1}} & \frac{\partial \psi^1}{\partial x_k} \\ \vdots & & \vdots & \vdots \\ \frac{\partial \psi^{k-1}}{\partial x_1} & \cdots & \frac{\partial \psi^{k-1}}{\partial x_{k-1}} & \frac{\partial \psi^{k-1}}{\partial x_k} \\ 0 & \cdots & 0 & \frac{\partial \psi^k}{\partial x_k} \end{pmatrix} \downarrow \text{ по послед. стр. }$$
$$= det \begin{pmatrix} \frac{\partial \psi^1}{\partial x_1} & \cdots & \frac{\partial \psi^1}{\partial x_{k-1}} \\ \vdots & & \vdots \\ \frac{\partial \psi^{k-1}}{\partial x_1} & \cdots & \frac{\partial \psi^{k-1}}{\partial x_{k-1}} \end{pmatrix} \cdot \frac{\partial \psi^k}{\partial x_k} > 0$$
$$det((\psi|_{\partial \mathbb{H}^k})')$$

Осталось показать, что $\frac{\partial \psi^k}{\partial x_k} (x_1, ..., x_{k-1}, 0) > 0$
$$\lim_{t \to +0} \frac{\psi^k(x_1, ..., x_{k-1}, t) - \psi^k(x_1, ..., x_{k-1}, 0)}{t} = \lim_{t \to +0} \frac{\psi^k(x_1, ..., x_{k-1}, t)}{t} \stackrel{0}{\neq} 0$$
$$\lim_{t \to +0} \frac{\psi^k(x_1, ..., x_{k-1}, t)}{t} > 0$$

cqfd.


---

## Page: page_93.png

# Примеры

$\mathbb{R}^2$
Какой ориентации у края?
$\xi_2$ задает ориент. края
$p$
$\xi_1$ попошим обход (обн. ост. слева)

$x \in \partial M$
$$
\begin{aligned}
&M \\
&T_x M
\end{aligned}
$$

$$T_x \partial M$$
Пусть $\{\xi_1, ..., \xi_k\}$ ортог. базис в $T_x M$
Берем $\xi_1 \perp T_x \partial M$
$\xi_1$ – внешний, тогда ост. вектора $\{\xi_2, ..., \xi_k\}$ задают ориент. в $\partial M$.

$\mathbb{R}^3$

$\{\vec{n}, \xi_1, \xi_2\} \sim \{\vec{e_1}, \vec{e_2}, \vec{e_3}\}$

### Опр.
Мн-во $M$ наз. кусочно-гладким $k$-мерным мног-ием, если оно состоит из [НРЗБ] более чем счетного числа $k$-мерных многообр-ий (= грани), которые могут пересекаться по мн-иям размер. $< k$.
*так наз-ем просто*
### Примеры:
$k=1$
0-мер.
1-мер.

$k=2$

### Опр.
Кусочно-гладкое мн-ие $M$ наз. ориентируемым, если каждая грань имеет такие ориентирующие атласы, которые задают противоположную ориент. на пересеч. граней.

---

## Page: page_94.png

# Интегрирование диф. форм

## §
### Опр.
Пусть $M$ - гладкое $k$-мерное мн-ие. Будим говорить, что на $M$ определена глад. дир. форма $\omega^k$, если
$$\omega^k: M \times \underbrace{T_xM \times ... \times T_xM}_{k} \to \mathbb{R}, \text{ м.е. } \omega^k(x, v_1, ..., v_k), \text{ где } v_j \in T_xM$$
Если $M \subseteq G \subseteq \mathbb{R}^n$ и на $G$ определена форма $\omega^k$, то её можно сузить на $M$.

### Опр.
Пусть $G$ - $k$-мерное ориентированное мн-ие в $\mathbb{R}^k$, $\omega^k$ - $k$-форма на $G$, т.е. $\omega^k = f(x) dx^1 \wedge dx^2 \wedge ... \wedge dx^k$ (*как гладк. ф-ия*)
$$\int_G \omega^k = \int_G f(x) dx^1 \wedge ... \wedge dx^k = (\pm 1) \int_G f(x) dx^1 dx^2 ... dx^k$$
+1 - если ориент. $G$ совп. с ориент. $\mathbb{R}^k$ зад-ой коор-ми $x_1,...,x_k$.
-1 - в противном случае.

### Опр.
Пусть $M$ - $k$-мерное ориентированное мног-ие в $\mathbb{R}^n$ и $\omega^k$ - $k$-мерисия форма на $M$. Тогда пусть $r: \mathbb{R}^k \to M$ - парам-ия $M$ в окр-ти $U$ точки $x \in M$. Тогда
$$\int_U \omega^k := \int_{\mathbb{R}^k} r^*(\omega^k).$$

29/04/24 - к опр. (1) добавить

### Замечание
(о гладкости дир. формы на мног-ки)
Форма $\omega$, опред. на мн-ии $M$, наз. $r$-гладкой, если $\forall$ карты $(U, \varphi)$ форма $(\varphi^{-1})^*\omega$ на $\mathbb{R}^k$ будет $r$-гладкой.

---

## Page: page_95.png

# Заголовок лекции
## §

### Опр. (3)
$$\int_M \omega = \int_{I_k} r^*\omega \stackrel{\Theta}{,} \quad \omega = \omega^k - k\text{-мери форма на } M.$$
$r: I_k \to M$ – параметризация $M$
$I_k$ – $k$-мерный куб.
$$r^*\omega = f(t) dt^1 \land ... \land dt^k \qquad \text{опр. (2)~(3)}$$
$$\stackrel{\Theta}{=} (\pm 1) \int_{I_k} f(t) dt^1 \land ... \land dt^k.$$
В зав-ти они ориентации

$\to$ Покажем, что опр-ие корректно, т.е. пусть $r_1: I_k \to M$ – ещё одна параметр-ия $M$, соглac. с ориентацией.

$$
\begin{array}{c}
    M \\
    \uparrow r_1 \\
    I_k
\end{array} \qquad
\begin{array}{c}
    \eta = r_1^{-1} \circ r - \text{ошобр. соседства, det }\eta' > 0 \\
    I_k \stackrel{\eta}{\to} I_k \\
    r_1 \circ \eta = r
\end{array}
$$
Надо: $\int_{I_k} r^*\omega = \int_{I_k} r_1^*\omega$ по опр.
$$\int_{I_k} r^*\omega = \int_{I_k} (r_1 \circ \eta)^* \omega = \int_{I_k} \eta^* (r_1^* \omega) = \int_{I_k} r_1^* \omega \leftarrow$$

### Примеры: ① Форма Работы
$F = (P, Q, R)$, $\omega_{\vec F} = Pdx + Qdy + Rdz$
$$
\begin{array}{c}
    \tau \searrow \gamma \\
    x = x(t) \\
    y = y(t) \\
    z = z(t)
\end{array}
$$
$\int_\gamma \omega_{\vec F} = \int_\gamma Pdx + Qdy + Rdz \stackrel{\Theta}{=}$

$$
\begin{cases}
    \tilde P = P(x(t), y(t), z(t)) \\
    \tilde Q = Q(x(t), y(t), z(t)) \\
    \tilde R = R(x(t), y(t), z(t))
\end{cases}
$$

$\stackrel{\Theta}{=} \int_a^b \tilde P \dot x dt + \tilde Q \dot y dt + \tilde R \dot z dt = \int_a^b (\tilde P, \tilde Q, \tilde R) \begin{pmatrix} \dot x \\ \dot y \\ \dot z \end{pmatrix} dt = \int_\gamma (\vec F, \vec \tau) \underbrace{\frac{\vec x}{dt}}_{d\ell} = \int_\gamma (\vec F, \vec \tau) d\ell$ – работа поля $F$ вдоль $\gamma$ с капр. $\vec \tau$.


---

## Page: page_96.png

```markdown
#  
$$x = \sqrt{x^2 + y^2 + z^2}$$
## §

2) Форма потока $\vec{F} = (P, Q, R)$
$$\omega_F^2 = P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy$$
-
$$\iint_M \omega_F^2 = \iint_{I_2} \tilde{P} \begin{vmatrix} y_u & y_v \\ z_u & z_v \end{vmatrix} du \wedge dv + \tilde{Q} \begin{vmatrix} z_u & z_v \\ x_u & x_v \end{vmatrix} du \wedge dv + \tilde{R} \begin{vmatrix} x_u & x_v \\ y_u & y_v \end{vmatrix} du \wedge dv = $$
-
$$ = \iint_{I_2} \begin{vmatrix} \tilde{P} & \tilde{Q} & \tilde{R} \\ x_u & y_u & z_u \\ x_v & y_v & z_v \end{vmatrix} du \wedge dv = $$
-
$$ = \iint_{I_2} (\vec{F}, \vec{n}_u \times \vec{n}_v) du dv = \iint_{I_2} (\vec{F}, \vec{n}) \mathcal{H} du dv = \iint_M (\vec{F}, \vec{n}) dS$$ - поток
- вектор. поля $\vec{F}$
- через $M$, ориент.
- Нормалью $\vec{n}$.

- $|| \vec{n}_u \times \vec{n}_v || = \mathcal{H} = \sqrt{EG-F^2}$

### Теорема. Формула Грина–Гаусса
(*граница состоит из 1 напр. св-ти*)

Пусть $D \subseteq \mathbb{R}^2$ односв. обл. с кусочно-гладкой границей $\partial D$, положим. ориент.
Пусть $P, Q \in C^1(\overline{D})$. Тогда
$$\oint_{\partial D} Pdx + Qdy = \iint_D Q_x - P_y dx dy$$

### Замечание: можно записать формулу в виде:
$$\omega_F = P dx + Q dy, \text{ тогда } d \omega_F = Q_x - P_y dx \wedge dy$$
и $$\oint_{\partial D} \omega_F = \iint_D d\omega_F.$$

### Д-во: ① (*для квадрата*)
Пусть $D = [0, 1] \times [0, 1]$ квадрат
- Достаточно показать, что
$$\oint_{\partial D} P dx = - \iint_D P_y dx dy$$
$$\oint_{\partial D} Q dy = \iint_D Q_x dx dy$$
```

---

## Page: page_97.png

# Заголовок лекции (Дата, Глава)

$$-\iint_\mathcal{D} P_y dxdy = -\int_0^1 dx \int_0^1 P'_y dy = -\int_0^1 P(x, 1) - P(x, 0) dx = $$
$$ = \int_0^1 P(x, 0) - P(x, 1) dx$$
$\gamma_1: x = x \in [0, 1], y = 0$
$\gamma_2: x = x \in [0, 1], y = 1$

$$\oint_{\partial \mathcal{D}} Pdx = \int_{\gamma_1} Pdx + \int_{\gamma_2} Pdx$$

$$\oint_{\partial \mathcal{D}} Pdx = \int_0^1 P(x, 0) dx + \int_1^0 P(x, 1) dx = \int_0^1 P(x, 0) - P(x, 1) dx$$

## §

(2) Пусть $\mathcal{D}$ такова, что $\exists \varphi: I_2 \to \mathcal{D}$, $\varphi \in C^1$ гладк.
$$\iint_\mathcal{D} d\omega_F = \iint_{I_2} \varphi^*(d\omega_F) = \iint_{I_2} d(\varphi^*\omega_F) = \oint_{\partial I_2} \varphi^*\omega_F \stackrel{\Theta}{=} $$
$\varphi: I_2 \to \mathcal{D}$
$\Rightarrow \varphi(\partial I_2) = \partial \mathcal{D}$
(д-но в п.①)
$$\stackrel{\Theta}{=} \int_{\varphi(\partial I_2)} \omega_F = \int_{\partial \mathcal{D}} \omega_F$$

(3) Всякую односвязную обл. $\mathcal{D}$ с кусочно-гладк. границей можно предеш. Как объед. $\bigcup_i \mathcal{D}_i: \exists \varphi_i: I_2 \to \mathcal{D}_i - C^1$ гладк.

$$\iint_\mathcal{D} d\omega_F = \sum_i \iint_{\mathcal{D}_i} d\omega_F = \sum_i \oint_{\partial \mathcal{D}_i} \omega_F = \oint_{\partial \mathcal{D}} \omega_F$$

*cqfd.*

### Замечание
Ф-ла Грина справедлива для полисвязных областей.

### Следствие
Если $\vec{F} = (P, Q)$ таково, что $Q_x - P_y = 1$, то
$$\iint_\mathcal{D} d\omega_F = \iint_\mathcal{D} dxdy = \oint_{\partial \mathcal{D}} Pdx + Qdy$$
$$\iint_\mathcal{D} d\omega_F = \iint_\mathcal{D} dxdy = \oint_{\partial \mathcal{D}} Pdx + Qdy$$
$$S(\mathcal{D})$$

---

## Page: page_98.png

# Заголовок лекции (Дата, Глава)
## §

В частности:
$$P = -y$$
$$Q = 0$$
$$S(\mathfrak{D}) = -\oint_{\partial \mathfrak{D}} y dx$$
$$S(\mathfrak{D}) = \frac{1}{2} \oint_{\partial \mathfrak{D}} x dy - y dx.$$
$$P = 0$$
$$Q = x$$
$$S(\mathfrak{D}) = \oint_{\partial \mathfrak{D}} x dy$$
### Пример: лисья Декарта

$$y = tx$$
$$t \in \mathbb{R}$$
$$x^3 + y^3 = 3axy$$
$$x^3 + t^3x^3 = 3ax^2$$
$$x = \frac{3at}{1 + t^3}$$
$$y = \frac{3at^2}{1 + t^3}$$

$\frac{3at}{1+t^3} = \frac{3at^2}{1+t^3} \quad \forall t \in [0, 1], \quad x \geqslant y$

$$x dy - y dx = x^2 + y^2 \ darctg \frac{y}{x} = \left( \left( \frac{3at}{1+t^3} \right)^2 + \left( \frac{3at^2}{1+t^3} \right)^2 \right) darctg \ t =$$
$$= \frac{9a^2t^2(1+t^2)}{(1+t^3)^2(1+t^2)} dt = \frac{9a^2t^2}{(1+t^3)^2} dt = -3a^2 d \left( \frac{1}{1+t^3} \right)$$
$$S(\mathfrak{D}) = \frac{1}{2} \int_0^{+\infty} -3a^2 d \left( \frac{1}{1+t^3} \right) = -\frac{3a^2}{2} \left. \frac{1}{1+t^3} \right|_0^{+\infty} = \frac{3a^2}{2}$$

Формула Гаусса - Остроградского

### Теорема.
Пусть $\mathfrak{D}$ - обл. в $\mathbb{R}^3$ с кусочно-гладкой ориентированной границей $\partial \mathfrak{D}$ (соглас. с $\mathbb{R}^3$ ориент.)
$$P, Q, R \in C^1(\overline{\mathfrak{D}}).$$ Тогда

$$\iint_{\partial \mathfrak{D}} \omega^2_F = \iint_{\partial \mathfrak{D}} P dy \wedge dz + Q dz \wedge dx + R dx \wedge dy = \iiint_{\mathfrak{D}} \operatorname{div} \vec{F} \ dx dy dz$$

### Замечание:
$\phi$-лу Г.-О. можно записать в терм. дифф. форме:

$$\iint_{\partial \mathfrak{D}} \omega^2_F = \iiint_{\mathfrak{D}} d\omega^2_F = \iiint_{\mathfrak{D}} \omega^2_{\operatorname{div}F}$$

---

## Page: page_99.png

# Заголовок лекции
## §

### Следствие (ф-ла объема):
Если $\vec{F} = (P, Q, R)$ таково, что $div \vec{F} = 1$, то $V(\mathfrak{D}) = \iint_{\partial \mathfrak{D}} \omega_{\vec{F}}^2$
В частности
$\vec{F} = (x, 0, 0)$
$\vec{F} = (0, y, 0)$
$\vec{F} = (0, 0, z)$
$$V(\mathfrak{D}) = \iint_{\partial \mathfrak{D}} x \, dy \wedge dz = \iint_{\partial \mathfrak{D}} y \, dz \wedge dx = \iint_{\partial \mathfrak{D}} z \, dx \wedge dy$$

### Пример: объем тора
\begin{cases}
x = (b + a\cos\psi)\cos\varphi \\
y = (b + a\cos\psi)\sin\varphi \\
z = a\sin\psi
\end{cases}
$\varphi, \psi \in [0, 2\pi)$
$$dx \wedge dy = \begin{vmatrix}
x_\varphi & x_\psi \\
y_\varphi & y_\psi
\end{vmatrix} d\varphi d\psi = \begin{vmatrix}
-\sin\varphi(b + a\cos\psi) & \cos\varphi(-a\sin\psi) \\
\cos\varphi(b + a\cos\psi) & \sin(-a\sin\psi)
\end{vmatrix} d\varphi d\psi = a\sin\psi(b + a\cos\psi) \, d\varphi d\psi$$
$$V = \iint_{\partial \mathfrak{D}} z \, dx \wedge dy = \int_0^{2\pi} \int_0^{2\pi} a^2\sin^2\psi (b + a\cos\psi) \, d\varphi d\psi = $$
$$= 2\pi a^2 \int_0^{2\pi} b\sin^2\psi + a\sin^2\psi \cos\psi \, d\psi = ... = 2\pi^2 a^2 b$$

### Теорема (формула Стокса)
Компактное
Пусть $M$ - кусоч.-гладк. 2-мерное ориентир-ое многообразие в $\mathbb{R}^3$ с краем $\partial M$, с соглас. ориентацией.
Пусть $M \subset G$ - обл. в $\mathbb{R}^3$ и $P, Q, R \in C^1(G)$. Тогда
$$\iint_M d\omega_{\vec{F}}^1 = \oint_{\partial M} \omega_{\vec{F}}^1$$
$$\iint_M (rot \vec{F}, \vec{n}) \, dS = \oint_{\partial M} P \, dx + Q \, dy + R \, dz$$

02.05.24
### Следствие из теоремы Г.-О.
- Безкоординатное опр. дивергенции
Пусть $\vec{F} \in C^1(G)$, $G \subset \mathbb{R}^3$ - обл.

---

