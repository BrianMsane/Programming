

import asyncio


async def send_email():
    print("Sending")
    await asyncio.sleep(2)
    print('sent')


async def task1():
    await task2()
    print('task 1')


async def task2():
    await asyncio.sleep(2)
    print('task 2')


async def task3():
    print('task 3')


if asyncio.iscoroutine(send_email()):
    asyncio.run(send_email())


asyncio.run(task1())