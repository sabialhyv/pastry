import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Link } from "react-router-dom"
import shop from "../assets/images/shop.png"

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <div className="about-section p-20 min-h-96 w-[70%] m-auto">
      <div className="text-center">
        <h1 className="text-9xl mb-4">Maison Fraise</h1>
        <motion.p
          className="uppercase text-lg"
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
        >
          pâtisserie
        </motion.p>
      </div>
      <div className="menu-text flex items-end gap-20 justify-between">
        <div className="flex flex-col gap-10">
          <motion.p
            className="uppercase text-lg"
            ref={ref}
            initial={{ x: -200 }}
            animate={isInView ? { x: 0 } : { x: -200 }}
            transition={{
              duration: 2,
            }}
          >
            WELCOME TO OUR PASTRY SHOP Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Error vitae eligendi enim dolorum, a, nihil,
            ducimus modi aperiam autem accusantium rem sit maiores libero
            doloremque qui illo!
          </motion.p>
          <Link className="text-lg underline italic" to="/menu">
            See the menu
          </Link>
        </div>
        <motion.img
          className="w-[40%] h-[450px] -mt-[49px]"
          ref={ref}
          initial={{ x: 200 }}
          animate={isInView ? { x: 0 } : { x: 200 }}
          transition={{
            duration: 2,
          }}
          src={shop}
          alt=""
        />
      </div>
    </div>
  )
}

export default About