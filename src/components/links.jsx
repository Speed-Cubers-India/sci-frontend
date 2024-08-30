import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

export function MoreLinks() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className=" font-semibold leading-none">More Links</h4>
      </div>
      <Separator className="my-2" />
      <div className="text-sm space-y-1 md:space-y-0 md:flex items-center gap-3">
        <a className="text-blue-900 hover:underline hover:underline-offset-2" href="https://www.worldcubeassociation.org/competitions?region=India">Upcoming Competitions in India</a>
        <Separator orientation="vertical" />
        <Link className="text-blue-900 hover:underline hover:underline-offset-2" to={'/ranking'}>State Rankings</Link>
        <Separator orientation="vertical" />
        <a className="text-blue-900 hover:underline hover:underline-offset-2" href="https://live.worldcubeassociation.org/">WCA Live</a>
        <Separator orientation="vertical" />
        <a className="text-blue-900 hover:underline hover:underline-offset-2" href="https://www.worldcubeassociation.org/">World Cube Association</a>
      </div>
    </div>
  )
}
