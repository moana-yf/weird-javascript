import turtle, time, random

# Initializing windos, head, segment of the body, and the monster
win, head, monster, segment = (
    turtle.Screen(),
    turtle.Turtle(),
    turtle.Turtle(),
    turtle.Turtle(),
)
win.title("Snake \t Contracted: %d, Time: %d " % (0, 0))
win.bgcolor("white"), win.setup(500, 500), win.tracer(0)
head.direction, monster.direction, segment.direction = "stop", "stop", "stop"
head.shape("square"), head.color("black"), head.penup(), head.goto(0, 0),
monster.shape("square"), monster.color("purple"), monster.penup(), monster.goto(
    -100, 0
),


# distributing food randomly.
foods, snake, y = [], [], 40
for i in range(5):
    snake.append(turtle.Turtle())
for i in range(9):
    foods.append(turtle.Turtle())
for segment in snake:
    segment.shape("square"), segment.color("grey"), segment.speed(0)
    segment.penup(), segment.goto(0, 0)
    segment.direction = "stop"
for food in foods:
    x, y = random.randrange(-235, 235), random.randrange(-235, 235)
    food.speed(0), food.penup(), food.shape("square")
    food.ht(), food.goto(x, y), food.write(foods.index(food) + 1, font=20)


def move():
    if head.direction == "up":
        y1 = head.ycor()  # y coordinate of the turtle
        head.sety(y1 + 20)
    if head.direction == "down":
        y1 = head.ycor()  # y coordinate of the turtle
        head.sety(y1 - 20)
    if head.direction == "right":
        x1 = head.xcor()  # y coordinate of the turtle
        head.setx(x1 + 20)
    if head.direction == "left":
        x1 = head.xcor()  # y coordinate of the turtle
        head.setx(x1 - 20)


def go_up():
    if head.direction != "down":
        head.direction = "up"


def go_down():
    if head.direction != "up":
        head.direction = "down"


def go_right():
    if head.direction != "left":
        head.direction = "right"


def go_left():
    if head.direction != "right":
        head.direction = "left"


def topple():
    if head.direction != "up" or "left" or "right" or "down":
        head.direction = "stop"


def monster_move():
    speed = random.randrange(6, 18)
    if head.direction == "stop" and (head.xcor() == 0 and head.ycor() == 0):
        monster.direction = "stop"
    else:
        monster.setheading(monster.towards(head))
        monster.forward(speed)


# Main game loop
def main():
    contact = 0
    start_time = time.time()
    while True:
        win.update()
        for food in foods:
            if head.distance(food) < 15:
                counter = foods.index(food)
                while counter >= 0:
                    new_segment = turtle.Turtle()
                    new_segment.color("grey"), new_segment.shape("square")
                    new_segment.penup(), new_segment.goto(1000, 1000)
                    snake.append(new_segment)
                    counter -= 1
                    food.clear()
                    food.goto(1000, 1000)
        # Extend its body.
        for i in range(len(snake) - 1, 0, -1):
            x, y = snake[i - 1].xcor(), snake[i - 1].ycor()
            snake[i].goto(x, y)
        if len(snake) > 0:
            x, y = head.xcor(), head.ycor()
            snake[0].goto(x, y)
        # Controlling the movements of the head and monster
        move()
        monster_move()
        time.sleep(0.1)  # Setting the delay to 0.1
        # Colliding with the monster, game ends.
        if head.distance(monster) < 8:
            head.write("Game Over.", font=40)
            head.direction = "stop"
            break

        # Counting the collision of monster and snake.
        for segment in snake:
            if segment.distance(monster) < 8:
                contact += 1
        # Check for head colliding with the wall
        if (
            head.xcor() > 250
            or head.xcor() < -250
            or head.ycor() > 250
            or head.ycor() < -250
        ):
            time.sleep(1)
            # head.goto(0, 0)
            head.direction = "stop"
            head.write("Game Over", font=100)
            break
        # Check for head collision with body
        for segment in snake:
            if segment.distance(head) < 0:
                time.sleep(1)
                head.direction = "stop"
                head.write("Game Over", font=100)
                break
        # Hide the foods once they are touched
        for food in foods:
            if food.xcor() == 1000 and food.ycor() == 1000:
                foods.remove(food)
        if foods == []:
            head.write("Winner", font=100)
            break
        # Calculate the time.
        time_passed = int(time.time() - start_time)
        win.title("Snake \t Contracted: %d, Time: %d " % (contact, time_passed))


# binding the keys with movements.
win.listen()
win.onkey(go_up, "w"), win.onkey(go_down, "s")
win.onkey(go_left, "a"), win.onkey(go_right, "d")
win.onkey(topple, "p")

main()
win.mainloop()
