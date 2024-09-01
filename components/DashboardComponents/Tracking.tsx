import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

const Tracking = () => {
  return (
    <div className="flex flex-col items-center justify-start rounded-3xl w-full md:w-96 h-full p-4 bg-dark_bg/10 text-secondary">
      <h1 className="text-xl font-medium mb-4">Tracking</h1>
      <div className='w-full p-2 max-h-[500px] flex items-start justify-center overflow-y-scroll'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="border border-secondary text-center text-lg font-semibold text-primary">Order ID</TableHead>
              <TableHead className="border border-secondary text-center text-lg font-semibold text-primary">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-center">
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium border border-secondary">{invoice.invoice}</TableCell>
                <TableCell className="border border-secondary">{invoice.paymentStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Tracking
