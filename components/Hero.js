import Button from './Button'

export default function Hero() {
  return (
    <section className="w-full h-64v flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-5xl mb-1">
        Learn the ins and outs of Three.js
      </h1>
      <p className="text-center w-4/5 mb-4 mx-auto">
        Rerum quod aut et assumenda. Ut et amet repudiandae qui aperiam facere
        temporibus sint omnis. Numquam laboriosam rerum. Et animi voluptas.
      </p>
      <div className="flex justify-center items-center gap-1">
        <Button main={true} text="Get Started" />
        <Button main={false} text="Learn More" />
      </div>
    </section>
  )
}
