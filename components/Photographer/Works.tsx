

import {Images} from './PhotoWorks'

export default function Works() {

  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-4">
            {Images}
        </div>
        </section>
  )
}