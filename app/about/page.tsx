import Navbar from "../components/navbar"
export default async function About(){
    await new Promise ((resolve)=> {
        setTimeout(resolve,5000)
    })
    return(
        <div>
            <Navbar />
            <h1 className="bg-sky-100 text-gray-700 text-3xl p-3 m-1 pl-3 border-8 border-zinc-200">Hello!</h1>
            <h1 className="bg-sky-100 text-gray-700 text-xl p-1 m-4">You're Welcome at About Page</h1>
            <p className="bg-sky-100 text-gray-700 text-sm p-2 m-4 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat fugit reiciendis minus adipisci debitis, omnis porro odit quae nostrum distinctio doloremque sint repudiandae facilis nisi alias, architecto dolore delectus! Rerum doloremque sit velit! Numquam dolores perspiciatis aliquid. Dolorum magni culpa consequatur sint aliquam consectetur omnis ea fugiat numquam necessitatibus, praesentium enim optio cumque ullam molestiae, amet sapiente minima sunt doloremque possimus illo totam voluptatibus non. Quaerat ratione natus exercitationem asperiores illum dignissimos recusandae ducimus minus, nemo animi assumenda fugiat facilis commodi reiciendis, placeat magni incidunt. Rem commodi facere officia molestiae nostrum cumque voluptatibus assumenda omnis consequuntur. Ducimus odio sed quidem!</p>
            <p className="bg-sky-100 text-gray-700 text-sm p-2 m-4 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, minus! Dignissimos, deserunt commodi fuga architecto sequi debitis blanditiis! Quas, accusantium tempore. Vitae perferendis ex earum! Dolorum fugit, quod et earum expedita itaque, ut optio labore voluptatum dignissimos suscipit soluta pariatur sequi commodi facilis doloremque cumque culpa similique eius ipsa obcaecati animi! Enim est sit distinctio illum molestiae error consequatur aut tenetur repellat illo quae modi ab, qui quis eius repellendus dicta minus ipsam quia quibusdam veniam. Obcaecati, inventore! Sint alias iure dolorem esse hic. Libero repellat qui blanditiis. Nam, natus quisquam odit sint soluta optio et dignissimos itaque labore molestias esse voluptatum ea ullam architecto fuga reiciendis incidunt deleniti velit illo alias. Fuga dolorem rerum voluptatum totam molestiae cupiditate officia architecto, perferendis ab eum eligendi ad officiis eaque distinctio, esse perspiciatis aliquam, quisquam ea similique amet earum? Illum mollitia, ipsam debitis quod sunt quibusdam iure. Blanditiis qui vero alias consectetur.</p>
        </div>
    )
}