import type React from "react"
import { Button } from "@/components/ui/button"

interface ConfirmModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
        <h2 className="text-xl font-bold mb-4 text-white">Confirmation</h2>
        <p className="mb-6 text-gray-400">You are about to leave the site, are you sure?</p>
        <div className="flex justify-end space-x-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-[#FF1155]/20 text-[#FF1155] hover:bg-[#FF1155]/10 bg-transparent backdrop-blur-sm"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="bg-[#FF1155]/20 hover:bg-[#FF1155]/30 text-white backdrop-blur-sm border border-[#FF1155]/20"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal

